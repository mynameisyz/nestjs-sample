import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      APP_PORT: {
        validate: Joi.number(),
        required: true,
        default: 3000,
      },
      DB_URI: {
        validate: Joi.string(),
        required: true,
      },
    };
  }
}
