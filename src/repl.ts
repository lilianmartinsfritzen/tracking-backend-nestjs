import { repl } from '@nestjs/core';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();

// não criamos uma controller para a routes-driver, porque utilizaremos web socket
// neste caso o NestJS disponibiliza o repl para testarmos os métodos via terminal
// doc com mais métodos https://docs.nestjs.com/recipes/repl
// abaixo segue uma consulta via terminal usando get

// node ➜ ~/app (main) $ npm run repl

// > backend-nestjs@0.0.1 repl
// > npm run start -- --entryFile repl

// > backend-nestjs@0.0.1 start
// > nest start --entryFile repl

// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [NestFactory] Starting Nest application...
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] PrismaModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] ConfigHostModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] AppModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] ConfigModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] MapsModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG [InstanceLoader] RoutesModule dependencies initialized
// [Nest] 30605  - 08/24/2023, 2:34:15 AM     LOG REPL initialized

// > await get(RoutesDriverService).createOrUpdate({route_id: '64e561aeb49a21cd7f28f582', lat:0, lng:0})
// {
//  points: [
//      { location: [Object], created_at: 2023-08-24T02:36:05.157Z },
//      { location: [Object], created_at: 2023-08-24T02:36:20.092Z }
//    ],
//    id: '64e6c215e2224b2e628dfccc',
//    route_id: '64e561aeb49a21cd7f28f582',
//    created_at: 2023-08-24T02:36:05.157Z,
//    updated_at: 2023-08-24T02:36:20.092Z,
//    route: {
//      id: '64e561aeb49a21cd7f28f582',
//      name: 'route test 1',
//      distance: 0,
//      duration: 0,
//      directions: '{}',
//      created_at: 2023-08-23T01:32:30.633Z,
//      updated_at: 2023-08-23T01:32:30.633Z,
//      source: { name: '1', location: [Object] },
//      destination: { name: '2', location: [Object] }
//    }
//  }
