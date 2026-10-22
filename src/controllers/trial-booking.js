import { createBookingService, getAllBookingsService } from '../services/trial-booking-service.js';

export const createBooking = async (req, res) => {
  try {
    const booking = await createBookingService(req.body);
    return res.status(201).json({
      success: true,
      message: 'Successfully submitted trial booking request',
      data: booking,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to submit trial booking',
      data: {},
      err: error.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await getAllBookingsService();
    return res.status(200).json({
      success: true,
      message: 'Fetched all trial bookings successfully',
      data: bookings,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch trial bookings',
      data: {},
      err: error.message,
    });
  }
};