import { CreateRestaurantDto } from './dto/createRestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restarurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log('veganOnly', veganOnly);
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log('createRestaurantDto', createRestaurantDto);
    return true;
  }
}
