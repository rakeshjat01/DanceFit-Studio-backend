import { TrialBookingService } from '../services/index.js';

export const createBooking = async (req, res, next) => {
  try {
    const booking = await TrialBookingService.createBookingService(req.body);
    return res.status(201).json({
      success: true,
      message: 'Trial booking created successfully',
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await TrialBookingService.getAllBookingsService();
    return res.status(200).json({
      success: true,
      message: 'Bookings fetched successfully',
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};