import React, { useState } from 'react';
import { formConfig } from '../data/contactData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
