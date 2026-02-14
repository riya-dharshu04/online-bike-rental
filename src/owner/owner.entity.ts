import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { Role } from "src/users/user.entity";

@Entity('Owners')
export class Owner {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}