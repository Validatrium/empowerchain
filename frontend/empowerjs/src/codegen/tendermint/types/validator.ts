import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: bigint;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer?: ValidatorSDKType;
  total_voting_power: bigint;
}
export interface Validator {
  address: Uint8Array;
  pubKey?: PublicKey;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key?: PublicKeySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
export interface SimpleValidator {
  pubKey?: PublicKey;
  votingPower: bigint;
}
export interface SimpleValidatorSDKType {
  pub_key?: PublicKeySDKType;
  voting_power: bigint;
}
function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined,
    totalVotingPower: BigInt("0")
  };
}
export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.totalVotingPower.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = BigInt(reader.int64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      totalVotingPower: isSet(object.totalVotingPower) ? BigInt(object.totalVotingPower.toString()) : BigInt("0")
    };
  },
  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt("0");
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    pubKey: undefined,
    votingPower: BigInt("0"),
    proposerPriority: BigInt("0")
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.votingPower.toString()));
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(Long.fromString(message.proposerPriority.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = BigInt(reader.int64().toString());
          break;
        case 4:
          message.proposerPriority = BigInt(reader.int64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt("0"),
      proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt("0")
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt("0")).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt("0");
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt("0");
    return message;
  }
};
function createBaseSimpleValidator(): SimpleValidator {
  return {
    pubKey: undefined,
    votingPower: BigInt("0")
  };
}
export const SimpleValidator = {
  encode(message: SimpleValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.votingPower.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = BigInt(reader.int64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimpleValidator {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt("0")
    };
  },
  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: Partial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt("0");
    return message;
  }
};