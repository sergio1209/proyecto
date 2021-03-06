import { IUnitOfWork } from "../../infrastructure/contracts/i.unit.of.work";
import { Diary } from "../../domain/entity/diary";
import { IsInt, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDiaryService{
  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async execute(request: ResgisterDiaryRequest): Promise<ResgiterDiaryResponse>{

    try{
      const searchedDiary: Diary = await this.unitOfWork.diaryRepository.findOne({where: {idPatient: request.idPatient}});
      if (searchedDiary == undefined) {
        const newDiary: Diary= new Diary();
        newDiary.idPatient=request.idPatient;
        newDiary.namePatient=request.namePatient;
        newDiary.nameOphtalmologist=request.nameOphtalmologist;
        newDiary.status=request.status;
        newDiary.clinicalOrder=request.clinicalOrder;
        const savedDiary = await this.unitOfWork.diaryRepository.save(newDiary);
        if (savedDiary != undefined ) {
          return new ResgiterDiaryResponse(
            'agenda registrada satisfactoriamente'
          );
        }
      }
    }catch (e) {
      console.log(e);
      return new ResgiterDiaryResponse(
        'Se ha presentado un error al momento de registrar esta agenda',
      );
    }

  }
}

export class ResgisterDiaryRequest {
 @IsInt()
 @ApiProperty()
    public idPatient: number;
  @IsString()
  @ApiProperty()
  public namePatient:string;
  @IsString()
  @ApiProperty()
  public nameOphtalmologist:string;
  @IsString()
  @ApiProperty()
  public status: string;
  @IsString()
  @ApiProperty()
  public clinicalOrder:string;

}
export class ResgiterDiaryResponse {
  constructor(
    public readonly message: string,

  ) {}
}