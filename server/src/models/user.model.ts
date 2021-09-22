import { AllowNull, Column, DataType, Default, IsUUID, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { SocialTypes } from '../types';

@Table({
  tableName: 'user',
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export default class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id!: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(100))
  social_id!: string;

  @AllowNull(false)
  @Column(DataType.ENUM({ values: SocialTypes }))
  social_type!: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  name!: string;

  @Column(DataType.STRING(20))
  nickname!: string;

  @Column(DataType.STRING(300))
  profile_image!: string;
}
