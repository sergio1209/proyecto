import { IUnitOfWork } from "../infrastructure/contracts/i.unit.of.work";
import { Diary } from "../domain/entity/diary";

export class RegisterDiaryService{
  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async execute(request: ResgisterDiaryRequest): Promise<ResgiterDiaryResponse>{

    try{
      const searchedDiary = await this.unitOfWork.diaryRepository.findById(request.id);
      if (searchedDiary == undefined) {
        const newDiary: Diary= new Diary();
        newDiary.id=request.id;
        newDiary.namePatient=request.namePatient;
        newDiary.nameOphtalmologist=request.nameOphtalmologist;
        newDiary.status=request.status;
        newDiary.clinicalOrder=request.clinicalOrder;
        var savedDiary = await this.unitOfWork.complete(
          async () => await this.unitOfWork.diaryRepository.create(newDiary),
        );
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
  constructor(
    public id: string,
  public namePatient:string,
  public nameOphtalmologist:string,
  public status: string,
  public clinicalOrder:string
  ) {}
}
export class ResgiterDiaryResponse {
  constructor(
    public readonly message: string,

  ) {}
}