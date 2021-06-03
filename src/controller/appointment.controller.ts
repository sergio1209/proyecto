import { RegisterAppointmentRequest, RegisterAppointmentService } from "../application/register.appointment.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UnitOfWork } from "../infrastructure/base/unit.of.work";
import { QueryAppointmentService } from "../application/consult.appointment.service";


@Controller('Appointment')
export class AppointmentController{

  constructor(private readonly _unitOfWork: UnitOfWork) {}

  @Post()
  async registerAppointment(@Body() request: RegisterAppointmentRequest){
    const service: RegisterAppointmentService = new RegisterAppointmentService(this._unitOfWork);
    return await service.execute(request);
  }

  @Get(':id')
  async queryAppointmentPAtient(@Param('id') cedula: string ){
    const service: QueryAppointmentService = new QueryAppointmentService(this._unitOfWork);
    return await service.execute(cedula);
  }
}