import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { DonationsModule } from './donations/donations.module';
import {ApolloDriver} from "@nestjs/apollo"

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      driver: ApolloDriver,
      resolvers: {DateTime: GraphQLISODateTime}
    }),
    DonationsModule,
  ],
  // controllers: [AppController],
  providers: [],
})
export class AppModule {}
