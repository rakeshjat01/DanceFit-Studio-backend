 
export const validateCreateTrialBooking = (req, res, next) => {
  const { fullName, mobileNumber, consentAgreed } = req.body;

  if (!fullName || !mobileNumber) {
    return res.status(400).json({
      success: false,
      message: 'Full Name and Mobile Number are required.',
      data: {},
      error: 'Missing required fields',
    });
  }

  if (consentAgreed === false) {
    return res.status(400).json({
      success: false,
      message: 'Consent is required to submit a booking.',
      data: {},
      error: 'Consent not provided',
    });
  }

  next();
};