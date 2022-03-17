/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/routr
 *
 * This file is part of Routr
 *
 * Licensed under the MIT License (the "License")
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import grpc = require("@grpc/grpc-js")

export type LocationError = UnsupportedSchema | NotRoutesFoundForAOR
export type InvalidConfiguration = BadAlgorithmAndAffinityCombination | InvalidSchemaConfiguration

export class UnsupportedSchema extends Error {
  code: grpc.status;
  constructor(aor: string) {
    super(`aor ${aor} has an invalid schema, only "sip:" or "backend:" are allowed`);
    this.code = grpc.status.INVALID_ARGUMENT
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UnsupportedSchema.prototype);
  }
}

export class NotRoutesFoundForAOR extends Error {
  code: number;
  constructor(aor: string) {
    super(`no routes found for aor ${aor}`);
    this.code = grpc.status.NOT_FOUND
    Object.setPrototypeOf(this, NotRoutesFoundForAOR.prototype);
  }
}

export class InvalidSchemaConfiguration extends Error {
  code: grpc.status;
  constructor(msg: string) {
    super(msg);
    this.code = grpc.status.INVALID_ARGUMENT
    Object.setPrototypeOf(this, InvalidSchemaConfiguration.prototype);
  }
}

export class BadAlgorithmAndAffinityCombination extends Error {
  code: grpc.status;
  constructor() {
    super("session affinity can not be combined with round-robin load balancing");
    Object.setPrototypeOf(this, BadAlgorithmAndAffinityCombination.prototype);
  }
}

export class InvalidLoadBalancerAlgorithm extends Error {
  code: grpc.status;
  constructor() {
    super("found invalid load balancing algorithm. must be round-robin or least-sessions");
    Object.setPrototypeOf(this, BadAlgorithmAndAffinityCombination.prototype);
  }
}
