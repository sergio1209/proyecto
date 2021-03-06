import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('Diarys')
export class Diary{
  @ObjectIdColumn()
  public _id: ObjectID;
  @Column()
  public idPatient: number;
  @Column()
  public namePatient:string;
  @Column()
  public nameOphtalmologist:string;
  @Column()
  public status: string;
  @Column()
  public clinicalOrder:string;
}