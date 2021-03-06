import { OphthalmologistRepository } from "../repositories/ophthalmologist.repository";
import { PatientRepository } from "../repositories/patient.repository";
import { ClinicHistoryRepository } from "../repositories/clinic-history.repository";
import { PresciptionRepository } from "../repositories/presciption.repository";
import { DiaryRepository } from "../repositories/diary.repository";
import { AppointmentRepository } from "../repositories/appointment.repository";
import { UsersRepository } from "../repositories/users.repository";
import { RolRepository } from "../repositories/rol.repository";

export interface IUnitOfWork{

  //Repositories
  ophthalmologistRepository: OphthalmologistRepository;
  patientRepository: PatientRepository;
  clinicHistoryRepository: ClinicHistoryRepository;
  presciptionRepository: PresciptionRepository;
  diaryRepository: DiaryRepository;
  appointmentRepository: AppointmentRepository;
  usersRepository: UsersRepository;
  rolRepository: RolRepository;

}