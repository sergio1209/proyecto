import { IUnitOfWork } from "../infrastructure/contracts/i.unit.of.work";
import { Patient } from "../domain/entity/patient";

export class RegisterPatientService{
  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async execute(request: RegisterPatientRequest): Promise<RegisterPatientResponse>{

    try{
      const searchedPatient: Patient = await this.unitOfWork.patientRepository.findOne({where: {identification: request.identification}});
      if (searchedPatient==undefined ) {
        const newPatient: Patient= new Patient();
        newPatient.identification=request.identification;
        newPatient.names=request.names;
        newPatient.surnames=request.surnames;
        newPatient.DateofBirth=request.DateofBirth;
        newPatient.neighborhood=request.neighborhood;
        newPatient.phone=request.phone;
        newPatient.cellPhone=request.cellPhone;
        newPatient.address=request.address;
        newPatient.mail=request.mail;
        newPatient.guardian=request.guardian;
        newPatient.relationship=request.relationship;
        newPatient.cellPhoneGuardian=request.cellPhoneGuardian;
        newPatient.addressGuardian=request.addressGuardian;
        newPatient.agreement=request.agreement;
        newPatient.licenseNumber=request.licenseNumber;
        newPatient.EPS=request.EPS;
        newPatient.TypeUser=request.TypeUser;
        const savedPatient = await this.unitOfWork.patientRepository.save(newPatient);

        if (savedPatient != undefined ) {
          return new RegisterPatientResponse(
            'paciente registrado satisfactoriamente'
          );
        }
      }
    }catch (e) {
      console.log(e);
      return new RegisterPatientResponse(
        'Se ha presentado un error al momento de registrar este paciente',
      );
    }

  }
}

export class RegisterPatientRequest {
  constructor(
    public identification: string,
  public names: string,
  public surnames: string,
  public address: string,
  public DateofBirth: Date,
  public neighborhood: string,
  public phone: number,
  public cellPhone: number,
  public mail: string,
  public guardian: string,
  public relationship: string,
  public cellPhoneGuardian: number,
  public addressGuardian: string,
  public agreement: string,
  public licenseNumber: number,
  public EPS: string,
  public TypeUser: string
  ) {}
}
export class RegisterPatientResponse {
  constructor(
    public readonly message: string,

  ) {}
}