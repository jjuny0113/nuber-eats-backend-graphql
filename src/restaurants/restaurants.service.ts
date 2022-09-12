import { UpdateRestaurantDto } from './dto/updateRestaurant.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}
  async getAll(): Promise<Restaurant[]> {
    return await this.restaurantRepository.find();
  }
  createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const newRestaurant = this.restaurantRepository.create(createRestaurantDto);
    return this.restaurantRepository.save(newRestaurant);
  }

  async updateRestaurant({ id, data }: UpdateRestaurantDto) {
    try {
      // {id:id}
      await this.restaurantRepository.update(id, {
        ...data,
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
