import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ContentsModule } from './modules/contents/contents.module';

console.log(process.env.TYPEORM_DATABASE);
console.log(process.env.TYPEORM_HOST);
console.log(process.env.TYPEORM_PORT);
console.log(process.env.TYPEORM_USERNAME);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.TYPEORM_DATABASE,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      synchronize: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
    DisciplinesModule,
    LessonsModule,
    ContentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
