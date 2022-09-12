import { RestaurantResolver } from './restaurnat.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [RestaurantResolver],
})
export class RestaurantsModule {}
