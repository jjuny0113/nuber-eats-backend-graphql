import { CreateRestaurantDto } from './createRestaurant.dto';
import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto,
) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
