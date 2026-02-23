import { Controller, Get, Post, UseGuards, Req, Patch,Body, } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { BookingStatus } from '../entities/booking.entity';

@Controller('bookings')
@UseGuards(AuthGuard('jwt'))
export class BookingController {
    constructor(private readonly bookingService: BookingsService) { }

    @Post()
  createBooking(
    @Body()
    body: {
      bikeId: string;
      startDate: Date;
      endDate: Date;
    },
    @Req() req: Request,
  ) {
    const user = (req as any).user;

    return this.bookingService.createBooking(
      body.bikeId,
      user.userId,
      body.startDate,
      body.endDate,
    );
  }

    @Get()
    getAllBookings() {

    }
}