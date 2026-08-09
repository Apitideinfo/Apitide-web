import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email Transporter Helper
const createTransporter = () => {
  if (process.env.EMAIL_HOST_USER && process.env.EMAIL_HOST_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });
  }
  return null;
};

// --- API ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), framework: 'Node.js Express' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    console.log(`[Contact Submission] From: ${name} (${email}), Service: ${service || 'General'}`);

    const transporter = createTransporter();
    if (transporter) {
      const mailOptions = {
        from: `APITIDE Contact <${process.env.EMAIL_HOST_USER}>`,
        to: process.env.EMAIL_HOST_USER,
        subject: `New Lead: ${name} - ${service || 'General Consultation'}`,
        html: `
          <h2>New Contact Inquiry from APITIDE Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Requested Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #2563eb;">${message}</blockquote>
        `,
      };
      await transporter.sendMail(mailOptions);
    }

    return res.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. Our team will reach out within 24 hours.',
    });
  } catch (err) {
    console.error('Contact Form Error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error processing contact submission.' });
  }
});

// Newsletter Subscription Endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { first_name, email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    console.log(`[Newsletter Subscribe] Name: ${first_name || 'Friend'}, Email: ${email}`);

    const transporter = createTransporter();
    if (transporter) {
      const mailOptions = {
        from: `APITIDE Newsletter <${process.env.EMAIL_HOST_USER}>`,
        to: email,
        subject: 'Welcome to APITIDE AI Insights',
        html: `
          <h2>Welcome to APITIDE, ${first_name || 'Friend'}!</h2>
          <p>Thank you for subscribing to our AI & Automation insights newsletter.</p>
          <p>You'll receive exclusive case studies, n8n workflow blueprints, and enterprise AI modernization strategies delivered to your inbox.</p>
          <br>
          <p>Best regards,<br><strong>The APITIDE Team</strong></p>
        `,
      };
      await transporter.sendMail(mailOptions).catch(err => console.error('Welcome email error:', err));
    }

    return res.json({
      success: true,
      message: "You're subscribed! Check your email inbox for welcome insights.",
    });
  } catch (err) {
    console.error('Newsletter Error:', err);
    return res.status(500).json({ success: false, error: 'Server error subscribing to newsletter.' });
  }
});

// Serve production static assets if dist exists
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`🚀 APITIDE Node.js Express server running on port ${PORT}`);
});

export default app;
