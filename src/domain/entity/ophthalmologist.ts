import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity('Ophthalmologists')
export class Ophthalmologist{
  @ObjectIdColumn()
  public _id: ObjectID;
  @Column()
  public id: string;
  @Column()
  public names: string;
  @Column()
  public surnames: string;
  @Column()
  public specialty: string;
  @Column()
  public gender: string;
  @Column()
  public phone: number;
  @Column()
  public cellPhone:number;
  @Column()
  public address:string;
  @Column()
  public age: string;

}