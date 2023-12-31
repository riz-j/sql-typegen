var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/fp-ts/lib/function.js
var require_function = __commonJS((exports) => {
  var identity = function(a) {
    return a;
  };
  var constant = function(a) {
    return function() {
      return a;
    };
  };
  var flip = function(f) {
    return function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (args.length > 1) {
        return f(args[1], args[0]);
      }
      return function(a) {
        return f(a)(args[0]);
      };
    };
  };
  var flow = function(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
      case 1:
        return ab;
      case 2:
        return function() {
          return bc(ab.apply(this, arguments));
        };
      case 3:
        return function() {
          return cd(bc(ab.apply(this, arguments)));
        };
      case 4:
        return function() {
          return de(cd(bc(ab.apply(this, arguments))));
        };
      case 5:
        return function() {
          return ef(de(cd(bc(ab.apply(this, arguments)))));
        };
      case 6:
        return function() {
          return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
        };
      case 7:
        return function() {
          return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
        };
      case 8:
        return function() {
          return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
        };
      case 9:
        return function() {
          return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
        };
    }
    return;
  };
  var tuple = function() {
    var t = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      t[_i] = arguments[_i];
    }
    return t;
  };
  var increment = function(n) {
    return n + 1;
  };
  var decrement = function(n) {
    return n - 1;
  };
  var absurd = function(_) {
    throw new Error("Called `absurd` function which should be uncallable");
  };
  var tupled = function(f) {
    return function(a) {
      return f.apply(undefined, a);
    };
  };
  var untupled = function(f) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return f(a);
    };
  };
  var pipe = function(a, ab, bc, cd, de, ef, fg, gh, hi) {
    switch (arguments.length) {
      case 1:
        return a;
      case 2:
        return ab(a);
      case 3:
        return bc(ab(a));
      case 4:
        return cd(bc(ab(a)));
      case 5:
        return de(cd(bc(ab(a))));
      case 6:
        return ef(de(cd(bc(ab(a)))));
      case 7:
        return fg(ef(de(cd(bc(ab(a))))));
      case 8:
        return gh(fg(ef(de(cd(bc(ab(a)))))));
      case 9:
        return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
      default: {
        var ret = arguments[0];
        for (var i = 1;i < arguments.length; i++) {
          ret = arguments[i](ret);
        }
        return ret;
      }
    }
  };
  var not = function(predicate) {
    return function(a) {
      return !predicate(a);
    };
  };
  var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.dual = exports.getEndomorphismMonoid = exports.not = exports.SK = exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.unsafeCoerce = exports.identity = exports.apply = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = undefined;
  var getBooleanAlgebra = function(B) {
    return function() {
      return {
        meet: function(x, y) {
          return function(a) {
            return B.meet(x(a), y(a));
          };
        },
        join: function(x, y) {
          return function(a) {
            return B.join(x(a), y(a));
          };
        },
        zero: function() {
          return B.zero;
        },
        one: function() {
          return B.one;
        },
        implies: function(x, y) {
          return function(a) {
            return B.implies(x(a), y(a));
          };
        },
        not: function(x) {
          return function(a) {
            return B.not(x(a));
          };
        }
      };
    };
  };
  exports.getBooleanAlgebra = getBooleanAlgebra;
  var getSemigroup = function(S) {
    return function() {
      return {
        concat: function(f, g) {
          return function(a) {
            return S.concat(f(a), g(a));
          };
        }
      };
    };
  };
  exports.getSemigroup = getSemigroup;
  var getMonoid = function(M) {
    var getSemigroupM = (0, exports.getSemigroup)(M);
    return function() {
      return {
        concat: getSemigroupM().concat,
        empty: function() {
          return M.empty;
        }
      };
    };
  };
  exports.getMonoid = getMonoid;
  var getSemiring = function(S) {
    return {
      add: function(f, g) {
        return function(x) {
          return S.add(f(x), g(x));
        };
      },
      zero: function() {
        return S.zero;
      },
      mul: function(f, g) {
        return function(x) {
          return S.mul(f(x), g(x));
        };
      },
      one: function() {
        return S.one;
      }
    };
  };
  exports.getSemiring = getSemiring;
  var getRing = function(R) {
    var S = (0, exports.getSemiring)(R);
    return {
      add: S.add,
      mul: S.mul,
      one: S.one,
      zero: S.zero,
      sub: function(f, g) {
        return function(x) {
          return R.sub(f(x), g(x));
        };
      }
    };
  };
  exports.getRing = getRing;
  var apply = function(a) {
    return function(f) {
      return f(a);
    };
  };
  exports.apply = apply;
  exports.identity = identity;
  exports.unsafeCoerce = identity;
  exports.constant = constant;
  exports.constTrue = constant(true);
  exports.constFalse = constant(false);
  exports.constNull = constant(null);
  exports.constUndefined = constant(undefined);
  exports.constVoid = exports.constUndefined;
  exports.flip = flip;
  exports.flow = flow;
  exports.tuple = tuple;
  exports.increment = increment;
  exports.decrement = decrement;
  exports.absurd = absurd;
  exports.tupled = tupled;
  exports.untupled = untupled;
  exports.pipe = pipe;
  exports.hole = absurd;
  var SK = function(_, b2) {
    return b2;
  };
  exports.SK = SK;
  exports.not = not;
  var getEndomorphismMonoid = function() {
    return {
      concat: function(first, second) {
        return flow(first, second);
      },
      empty: identity
    };
  };
  exports.getEndomorphismMonoid = getEndomorphismMonoid;
  var dual = function(arity, body) {
    var isDataFirst = typeof arity === "number" ? function(args) {
      return args.length >= arity;
    } : arity;
    return function() {
      var args = Array.from(arguments);
      if (isDataFirst(arguments)) {
        return body.apply(this, args);
      }
      return function(self) {
        return body.apply(undefined, __spreadArray([self], args, false));
      };
    };
  };
  exports.dual = dual;
});

// node_modules/fp-ts/lib/internal.js
var require_internal = __commonJS((exports) => {
  var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar;i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.flatMapReader = exports.flatMapTask = exports.flatMapIO = exports.flatMapEither = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.fromReadonlyNonEmptyArray = exports.has = exports.emptyRecord = exports.emptyReadonlyArray = exports.tail = exports.head = exports.isNonEmpty = exports.singleton = exports.right = exports.left = exports.isRight = exports.isLeft = exports.some = exports.none = exports.isSome = exports.isNone = undefined;
  var function_1 = require_function();
  var isNone = function(fa) {
    return fa._tag === "None";
  };
  exports.isNone = isNone;
  var isSome = function(fa) {
    return fa._tag === "Some";
  };
  exports.isSome = isSome;
  exports.none = { _tag: "None" };
  var some = function(a) {
    return { _tag: "Some", value: a };
  };
  exports.some = some;
  var isLeft = function(ma) {
    return ma._tag === "Left";
  };
  exports.isLeft = isLeft;
  var isRight = function(ma) {
    return ma._tag === "Right";
  };
  exports.isRight = isRight;
  var left = function(e) {
    return { _tag: "Left", left: e };
  };
  exports.left = left;
  var right = function(a) {
    return { _tag: "Right", right: a };
  };
  exports.right = right;
  var singleton = function(a) {
    return [a];
  };
  exports.singleton = singleton;
  var isNonEmpty = function(as) {
    return as.length > 0;
  };
  exports.isNonEmpty = isNonEmpty;
  var head = function(as) {
    return as[0];
  };
  exports.head = head;
  var tail = function(as) {
    return as.slice(1);
  };
  exports.tail = tail;
  exports.emptyReadonlyArray = [];
  exports.emptyRecord = {};
  exports.has = Object.prototype.hasOwnProperty;
  var fromReadonlyNonEmptyArray = function(as) {
    return __spreadArray([as[0]], as.slice(1), true);
  };
  exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;
  var liftNullable = function(F) {
    return function(f, onNullable) {
      return function() {
        var a = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          a[_i] = arguments[_i];
        }
        var o = f.apply(undefined, a);
        return F.fromEither(o == null ? (0, exports.left)(onNullable.apply(undefined, a)) : (0, exports.right)(o));
      };
    };
  };
  exports.liftNullable = liftNullable;
  var liftOption = function(F) {
    return function(f, onNone) {
      return function() {
        var a = [];
        for (var _i = 0;_i < arguments.length; _i++) {
          a[_i] = arguments[_i];
        }
        var o = f.apply(undefined, a);
        return F.fromEither((0, exports.isNone)(o) ? (0, exports.left)(onNone.apply(undefined, a)) : (0, exports.right)(o.value));
      };
    };
  };
  exports.liftOption = liftOption;
  var flatMapNullable = function(F, M) {
    return (0, function_1.dual)(3, function(self, f, onNullable) {
      return M.flatMap(self, (0, exports.liftNullable)(F)(f, onNullable));
    });
  };
  exports.flatMapNullable = flatMapNullable;
  var flatMapOption = function(F, M) {
    return (0, function_1.dual)(3, function(self, f, onNone) {
      return M.flatMap(self, (0, exports.liftOption)(F)(f, onNone));
    });
  };
  exports.flatMapOption = flatMapOption;
  var flatMapEither = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromEither(f(a));
      });
    });
  };
  exports.flatMapEither = flatMapEither;
  var flatMapIO = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromIO(f(a));
      });
    });
  };
  exports.flatMapIO = flatMapIO;
  var flatMapTask = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromTask(f(a));
      });
    });
  };
  exports.flatMapTask = flatMapTask;
  var flatMapReader = function(F, M) {
    return (0, function_1.dual)(2, function(self, f) {
      return M.flatMap(self, function(a) {
        return F.fromReader(f(a));
      });
    });
  };
  exports.flatMapReader = flatMapReader;
});

// node_modules/fp-ts/lib/Apply.js
var require_Apply = __commonJS((exports) => {
  var ap = function(F, G) {
    return function(fa) {
      return function(fab) {
        return F.ap(F.map(fab, function(gab) {
          return function(ga) {
            return G.ap(gab, ga);
          };
        }), fa);
      };
    };
  };
  var apFirst = function(A) {
    return function(second) {
      return function(first) {
        return A.ap(A.map(first, function(a) {
          return function() {
            return a;
          };
        }), second);
      };
    };
  };
  var apSecond = function(A) {
    return function(second) {
      return function(first) {
        return A.ap(A.map(first, function() {
          return function(b2) {
            return b2;
          };
        }), second);
      };
    };
  };
  var apS = function(F) {
    return function(name, fb) {
      return function(fa) {
        return F.ap(F.map(fa, function(a) {
          return function(b2) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b2, _a));
          };
        }), fb);
      };
    };
  };
  var getApplySemigroup = function(F) {
    return function(S) {
      return {
        concat: function(first, second) {
          return F.ap(F.map(first, function(x) {
            return function(y) {
              return S.concat(x, y);
            };
          }), second);
        }
      };
    };
  };
  var curried = function(f, n, acc) {
    return function(x) {
      var combined = Array(acc.length + 1);
      for (var i = 0;i < acc.length; i++) {
        combined[i] = acc[i];
      }
      combined[acc.length] = x;
      return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
    };
  };
  var getTupleConstructor = function(len) {
    if (!_.has.call(tupleConstructors, len)) {
      tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
    }
    return tupleConstructors[len];
  };
  var sequenceT = function(F) {
    return function() {
      var args = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var len = args.length;
      var f = getTupleConstructor(len);
      var fas = F.map(args[0], f);
      for (var i = 1;i < len; i++) {
        fas = F.ap(fas, args[i]);
      }
      return fas;
    };
  };
  var getRecordConstructor = function(keys) {
    var len = keys.length;
    switch (len) {
      case 1:
        return function(a) {
          var _a;
          return _a = {}, _a[keys[0]] = a, _a;
        };
      case 2:
        return function(a) {
          return function(b2) {
            var _a;
            return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b2, _a;
          };
        };
      case 3:
        return function(a) {
          return function(b2) {
            return function(c) {
              var _a;
              return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b2, _a[keys[2]] = c, _a;
            };
          };
        };
      case 4:
        return function(a) {
          return function(b2) {
            return function(c) {
              return function(d) {
                var _a;
                return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b2, _a[keys[2]] = c, _a[keys[3]] = d, _a;
              };
            };
          };
        };
      case 5:
        return function(a) {
          return function(b2) {
            return function(c) {
              return function(d) {
                return function(e) {
                  var _a;
                  return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b2, _a[keys[2]] = c, _a[keys[3]] = d, _a[keys[4]] = e, _a;
                };
              };
            };
          };
        };
      default:
        return curried(function() {
          var args = [];
          for (var _i = 0;_i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var r = {};
          for (var i = 0;i < len; i++) {
            r[keys[i]] = args[i];
          }
          return r;
        }, len - 1, []);
    }
  };
  var sequenceS = function(F) {
    return function(r) {
      var keys = Object.keys(r);
      var len = keys.length;
      var f = getRecordConstructor(keys);
      var fr = F.map(r[keys[0]], f);
      for (var i = 1;i < len; i++) {
        fr = F.ap(fr, r[keys[i]]);
      }
      return fr;
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result2 = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result2, mod, k);
    }
    __setModuleDefault(result2, mod);
    return result2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = undefined;
  var function_1 = require_function();
  var _ = __importStar(require_internal());
  exports.ap = ap;
  exports.apFirst = apFirst;
  exports.apSecond = apSecond;
  exports.apS = apS;
  exports.getApplySemigroup = getApplySemigroup;
  var tupleConstructors = {
    1: function(a) {
      return [a];
    },
    2: function(a) {
      return function(b2) {
        return [a, b2];
      };
    },
    3: function(a) {
      return function(b2) {
        return function(c) {
          return [a, b2, c];
        };
      };
    },
    4: function(a) {
      return function(b2) {
        return function(c) {
          return function(d) {
            return [a, b2, c, d];
          };
        };
      };
    },
    5: function(a) {
      return function(b2) {
        return function(c) {
          return function(d) {
            return function(e) {
              return [a, b2, c, d, e];
            };
          };
        };
      };
    }
  };
  exports.sequenceT = sequenceT;
  exports.sequenceS = sequenceS;
});

// node_modules/fp-ts/lib/Functor.js
var require_Functor = __commonJS((exports) => {
  var map = function(F, G) {
    return function(f) {
      return function(fa) {
        return F.map(fa, function(ga) {
          return G.map(ga, f);
        });
      };
    };
  };
  var flap = function(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f) {
          return f(a);
        });
      };
    };
  };
  var bindTo = function(F) {
    return function(name) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return _a = {}, _a[name] = a, _a;
        });
      };
    };
  };
  var let_ = function(F) {
    return function(name, f) {
      return function(fa) {
        return F.map(fa, function(a) {
          var _a;
          return Object.assign({}, a, (_a = {}, _a[name] = f(a), _a));
        });
      };
    };
  };
  var getFunctorComposition = function(F, G) {
    var _map = map(F, G);
    return {
      map: function(fga, f) {
        return (0, function_1.pipe)(fga, _map(f));
      }
    };
  };
  var as = function(F) {
    return function(self, b2) {
      return F.map(self, function() {
        return b2;
      });
    };
  };
  var asUnit = function(F) {
    var asM = as(F);
    return function(self) {
      return asM(self, undefined);
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.asUnit = exports.as = exports.getFunctorComposition = exports.let = exports.bindTo = exports.flap = exports.map = undefined;
  var function_1 = require_function();
  exports.map = map;
  exports.flap = flap;
  exports.bindTo = bindTo;
  exports.let = let_;
  exports.getFunctorComposition = getFunctorComposition;
  exports.as = as;
  exports.asUnit = asUnit;
});

// node_modules/fp-ts/lib/Applicative.js
var require_Applicative = __commonJS((exports) => {
  var getApplicativeMonoid = function(F) {
    var f = (0, Apply_1.getApplySemigroup)(F);
    return function(M) {
      return {
        concat: f(M).concat,
        empty: F.of(M.empty)
      };
    };
  };
  var getApplicativeComposition = function(F, G) {
    var map = (0, Functor_1.getFunctorComposition)(F, G).map;
    var _ap = (0, Apply_1.ap)(F, G);
    return {
      map,
      of: function(a) {
        return F.of(G.of(a));
      },
      ap: function(fgab, fga) {
        return (0, function_1.pipe)(fgab, _ap(fga));
      }
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getApplicativeComposition = exports.getApplicativeMonoid = undefined;
  var Apply_1 = require_Apply();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  exports.getApplicativeMonoid = getApplicativeMonoid;
  exports.getApplicativeComposition = getApplicativeComposition;
});

// node_modules/fp-ts/lib/Chain.js
var require_Chain = __commonJS((exports) => {
  var chainFirst = function(M) {
    var tapM = tap(M);
    return function(f) {
      return function(first) {
        return tapM(first, f);
      };
    };
  };
  var tap = function(M) {
    return function(first, f) {
      return M.chain(first, function(a) {
        return M.map(f(a), function() {
          return a;
        });
      });
    };
  };
  var bind = function(M) {
    return function(name, f) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return M.map(f(a), function(b2) {
            var _a;
            return Object.assign({}, a, (_a = {}, _a[name] = b2, _a));
          });
        });
      };
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.bind = exports.tap = exports.chainFirst = undefined;
  exports.chainFirst = chainFirst;
  exports.tap = tap;
  exports.bind = bind;
});

// node_modules/fp-ts/lib/ChainRec.js
var require_ChainRec = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.tailRec = undefined;
  var tailRec = function(startWith, f) {
    var ab = f(startWith);
    while (ab._tag === "Left") {
      ab = f(ab.left);
    }
    return ab.right;
  };
  exports.tailRec = tailRec;
});

// node_modules/fp-ts/lib/FromEither.js
var require_FromEither = __commonJS((exports) => {
  var fromOption = function(F) {
    return function(onNone) {
      return function(ma) {
        return F.fromEither(_.isNone(ma) ? _.left(onNone()) : _.right(ma.value));
      };
    };
  };
  var fromPredicate = function(F) {
    return function(predicate, onFalse) {
      return function(a) {
        return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
      };
    };
  };
  var fromOptionK = function(F) {
    var fromOptionF = fromOption(F);
    return function(onNone) {
      var from = fromOptionF(onNone);
      return function(f) {
        return (0, function_1.flow)(f, from);
      };
    };
  };
  var chainOptionK = function(F, M) {
    var fromOptionKF = fromOptionK(F);
    return function(onNone) {
      var from = fromOptionKF(onNone);
      return function(f) {
        return function(ma) {
          return M.chain(ma, from(f));
        };
      };
    };
  };
  var fromEitherK = function(F) {
    return function(f) {
      return (0, function_1.flow)(f, F.fromEither);
    };
  };
  var chainEitherK = function(F, M) {
    var fromEitherKF = fromEitherK(F);
    return function(f) {
      return function(ma) {
        return M.chain(ma, fromEitherKF(f));
      };
    };
  };
  var chainFirstEitherK = function(F, M) {
    var tapEitherM = tapEither(F, M);
    return function(f) {
      return function(ma) {
        return tapEitherM(ma, f);
      };
    };
  };
  var filterOrElse = function(F, M) {
    return function(predicate, onFalse) {
      return function(ma) {
        return M.chain(ma, function(a) {
          return F.fromEither(predicate(a) ? _.right(a) : _.left(onFalse(a)));
        });
      };
    };
  };
  var tapEither = function(F, M) {
    var fromEither = fromEitherK(F);
    var tapM = (0, Chain_1.tap)(M);
    return function(self, f) {
      return tapM(self, fromEither(f));
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result2 = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result2, mod, k);
    }
    __setModuleDefault(result2, mod);
    return result2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.tapEither = exports.filterOrElse = exports.chainFirstEitherK = exports.chainEitherK = exports.fromEitherK = exports.chainOptionK = exports.fromOptionK = exports.fromPredicate = exports.fromOption = undefined;
  var Chain_1 = require_Chain();
  var function_1 = require_function();
  var _ = __importStar(require_internal());
  exports.fromOption = fromOption;
  exports.fromPredicate = fromPredicate;
  exports.fromOptionK = fromOptionK;
  exports.chainOptionK = chainOptionK;
  exports.fromEitherK = fromEitherK;
  exports.chainEitherK = chainEitherK;
  exports.chainFirstEitherK = chainFirstEitherK;
  exports.filterOrElse = filterOrElse;
  exports.tapEither = tapEither;
});

// node_modules/fp-ts/lib/Separated.js
var require_Separated = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = undefined;
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var separated = function(left2, right2) {
    return { left: left2, right: right2 };
  };
  exports.separated = separated;
  var _map = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _mapLeft = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
  };
  var _bimap = function(fa, g, f) {
    return (0, function_1.pipe)(fa, (0, exports.bimap)(g, f));
  };
  var map = function(f) {
    return function(fa) {
      return (0, exports.separated)((0, exports.left)(fa), f((0, exports.right)(fa)));
    };
  };
  exports.map = map;
  var mapLeft = function(f) {
    return function(fa) {
      return (0, exports.separated)(f((0, exports.left)(fa)), (0, exports.right)(fa));
    };
  };
  exports.mapLeft = mapLeft;
  var bimap = function(f, g) {
    return function(fa) {
      return (0, exports.separated)(f((0, exports.left)(fa)), g((0, exports.right)(fa)));
    };
  };
  exports.bimap = bimap;
  exports.URI = "Separated";
  exports.Bifunctor = {
    URI: exports.URI,
    mapLeft: _mapLeft,
    bimap: _bimap
  };
  exports.Functor = {
    URI: exports.URI,
    map: _map
  };
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  var left = function(s) {
    return s.left;
  };
  exports.left = left;
  var right = function(s) {
    return s.right;
  };
  exports.right = right;
});

// node_modules/fp-ts/lib/Witherable.js
var require_Witherable = __commonJS((exports) => {
  var wiltDefault = function(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.separate);
      };
    };
  };
  var witherDefault = function(T, C) {
    return function(F) {
      var traverseF = T.traverse(F);
      return function(wa, f) {
        return F.map(traverseF(wa, f), C.compact);
      };
    };
  };
  var filterE = function(W) {
    return function(F) {
      var witherF = W.wither(F);
      return function(predicate) {
        return function(ga) {
          return witherF(ga, function(a) {
            return F.map(predicate(a), function(b2) {
              return b2 ? _.some(a) : _.none;
            });
          });
        };
      };
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result2 = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result2, mod, k);
    }
    __setModuleDefault(result2, mod);
    return result2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.filterE = exports.witherDefault = exports.wiltDefault = undefined;
  var _ = __importStar(require_internal());
  exports.wiltDefault = wiltDefault;
  exports.witherDefault = witherDefault;
  exports.filterE = filterE;
});

// node_modules/fp-ts/lib/Either.js
var require_Either = __commonJS((exports) => {
  var toError = function(e) {
    return e instanceof Error ? e : new Error(String(e));
  };
  var elem = function(E) {
    return function(a, ma) {
      if (ma === undefined) {
        var elemE_1 = elem(E);
        return function(ma2) {
          return elemE_1(a, ma2);
        };
      }
      return (0, exports.isLeft)(ma) ? false : E.equals(a, ma.right);
    };
  };
  var parseJSON = function(s, onError) {
    return (0, exports.tryCatch)(function() {
      return JSON.parse(s);
    }, onError);
  };
  var getValidation = function(SE) {
    var ap = (0, exports.getApplicativeValidation)(SE).ap;
    var alt = (0, exports.getAltValidation)(SE).alt;
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map,
      of: exports.of,
      chain: exports.flatMap,
      bimap: _bimap,
      mapLeft: _mapLeft,
      reduce: _reduce,
      foldMap: _foldMap,
      reduceRight: _reduceRight,
      extend: _extend,
      traverse: _traverse,
      sequence: exports.sequence,
      chainRec: _chainRec,
      throwError: exports.throwError,
      ap,
      alt
    };
  };
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar = exports && exports.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result2 = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result2, mod, k);
    }
    __setModuleDefault(result2, mod);
    return result2;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.match = exports.foldW = exports.matchW = exports.isRight = exports.isLeft = exports.fromOption = exports.fromPredicate = exports.FromEither = exports.MonadThrow = exports.throwError = exports.ChainRec = exports.Extend = exports.extend = exports.Alt = exports.alt = exports.altW = exports.Bifunctor = exports.mapLeft = exports.bimap = exports.Traversable = exports.sequence = exports.traverse = exports.Foldable = exports.reduceRight = exports.foldMap = exports.reduce = exports.Monad = exports.Chain = exports.Applicative = exports.Apply = exports.ap = exports.apW = exports.Pointed = exports.of = exports.asUnit = exports.as = exports.Functor = exports.map = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.flatMap = exports.right = exports.left = undefined;
  exports.chainFirstW = exports.chainFirst = exports.chain = exports.chainW = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.ApT = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.let = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.orElse = exports.orElseW = exports.swap = exports.filterOrElseW = exports.filterOrElse = exports.flatMapOption = exports.flatMapNullable = exports.liftOption = exports.liftNullable = exports.chainOptionKW = exports.chainOptionK = exports.fromOptionK = exports.duplicate = exports.flatten = exports.flattenW = exports.tap = exports.apSecondW = exports.apSecond = exports.apFirstW = exports.apFirst = exports.flap = exports.getOrElse = exports.getOrElseW = exports.fold = undefined;
  exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = undefined;
  var Applicative_1 = require_Applicative();
  var Apply_1 = require_Apply();
  var chainable = __importStar(require_Chain());
  var ChainRec_1 = require_ChainRec();
  var FromEither_1 = require_FromEither();
  var function_1 = require_function();
  var Functor_1 = require_Functor();
  var _ = __importStar(require_internal());
  var Separated_1 = require_Separated();
  var Witherable_1 = require_Witherable();
  exports.left = _.left;
  exports.right = _.right;
  exports.flatMap = (0, function_1.dual)(2, function(ma, f) {
    return (0, exports.isLeft)(ma) ? ma : f(ma.right);
  });
  var _map = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.map)(f));
  };
  var _ap = function(fab, fa) {
    return (0, function_1.pipe)(fab, (0, exports.ap)(fa));
  };
  var _reduce = function(fa, b2, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduce)(b2, f));
  };
  var _foldMap = function(M) {
    return function(fa, f) {
      var foldMapM = (0, exports.foldMap)(M);
      return (0, function_1.pipe)(fa, foldMapM(f));
    };
  };
  var _reduceRight = function(fa, b2, f) {
    return (0, function_1.pipe)(fa, (0, exports.reduceRight)(b2, f));
  };
  var _traverse = function(F) {
    var traverseF = (0, exports.traverse)(F);
    return function(ta, f) {
      return (0, function_1.pipe)(ta, traverseF(f));
    };
  };
  var _bimap = function(fa, f, g) {
    return (0, function_1.pipe)(fa, (0, exports.bimap)(f, g));
  };
  var _mapLeft = function(fa, f) {
    return (0, function_1.pipe)(fa, (0, exports.mapLeft)(f));
  };
  var _alt = function(fa, that) {
    return (0, function_1.pipe)(fa, (0, exports.alt)(that));
  };
  var _extend = function(wa, f) {
    return (0, function_1.pipe)(wa, (0, exports.extend)(f));
  };
  var _chainRec = function(a, f) {
    return (0, ChainRec_1.tailRec)(f(a), function(e) {
      return (0, exports.isLeft)(e) ? (0, exports.right)((0, exports.left)(e.left)) : (0, exports.isLeft)(e.right) ? (0, exports.left)(f(e.right.left)) : (0, exports.right)((0, exports.right)(e.right.right));
    });
  };
  exports.URI = "Either";
  var getShow = function(SE, SA) {
    return {
      show: function(ma) {
        return (0, exports.isLeft)(ma) ? "left(".concat(SE.show(ma.left), ")") : "right(".concat(SA.show(ma.right), ")");
      }
    };
  };
  exports.getShow = getShow;
  var getEq = function(EL, EA) {
    return {
      equals: function(x, y) {
        return x === y || ((0, exports.isLeft)(x) ? (0, exports.isLeft)(y) && EL.equals(x.left, y.left) : (0, exports.isRight)(y) && EA.equals(x.right, y.right));
      }
    };
  };
  exports.getEq = getEq;
  var getSemigroup = function(S) {
    return {
      concat: function(x, y) {
        return (0, exports.isLeft)(y) ? x : (0, exports.isLeft)(x) ? y : (0, exports.right)(S.concat(x.right, y.right));
      }
    };
  };
  exports.getSemigroup = getSemigroup;
  var getCompactable = function(M) {
    var empty = (0, exports.left)(M.empty);
    return {
      URI: exports.URI,
      _E: undefined,
      compact: function(ma) {
        return (0, exports.isLeft)(ma) ? ma : ma.right._tag === "None" ? empty : (0, exports.right)(ma.right.value);
      },
      separate: function(ma) {
        return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : (0, exports.isLeft)(ma.right) ? (0, Separated_1.separated)((0, exports.right)(ma.right.left), empty) : (0, Separated_1.separated)(empty, (0, exports.right)(ma.right.right));
      }
    };
  };
  exports.getCompactable = getCompactable;
  var getFilterable = function(M) {
    var empty = (0, exports.left)(M.empty);
    var _a = (0, exports.getCompactable)(M), compact = _a.compact, separate = _a.separate;
    var filter = function(ma, predicate) {
      return (0, exports.isLeft)(ma) ? ma : predicate(ma.right) ? ma : empty;
    };
    var partition = function(ma, p) {
      return (0, exports.isLeft)(ma) ? (0, Separated_1.separated)(ma, ma) : p(ma.right) ? (0, Separated_1.separated)(empty, (0, exports.right)(ma.right)) : (0, Separated_1.separated)((0, exports.right)(ma.right), empty);
    };
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map,
      compact,
      separate,
      filter,
      filterMap: function(ma, f) {
        if ((0, exports.isLeft)(ma)) {
          return ma;
        }
        var ob = f(ma.right);
        return ob._tag === "None" ? empty : (0, exports.right)(ob.value);
      },
      partition,
      partitionMap: function(ma, f) {
        if ((0, exports.isLeft)(ma)) {
          return (0, Separated_1.separated)(ma, ma);
        }
        var e = f(ma.right);
        return (0, exports.isLeft)(e) ? (0, Separated_1.separated)((0, exports.right)(e.left), empty) : (0, Separated_1.separated)(empty, (0, exports.right)(e.right));
      }
    };
  };
  exports.getFilterable = getFilterable;
  var getWitherable = function(M) {
    var F_ = (0, exports.getFilterable)(M);
    var C = (0, exports.getCompactable)(M);
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map,
      compact: F_.compact,
      separate: F_.separate,
      filter: F_.filter,
      filterMap: F_.filterMap,
      partition: F_.partition,
      partitionMap: F_.partitionMap,
      traverse: _traverse,
      sequence: exports.sequence,
      reduce: _reduce,
      foldMap: _foldMap,
      reduceRight: _reduceRight,
      wither: (0, Witherable_1.witherDefault)(exports.Traversable, C),
      wilt: (0, Witherable_1.wiltDefault)(exports.Traversable, C)
    };
  };
  exports.getWitherable = getWitherable;
  var getApplicativeValidation = function(SE) {
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map,
      ap: function(fab, fa) {
        return (0, exports.isLeft)(fab) ? (0, exports.isLeft)(fa) ? (0, exports.left)(SE.concat(fab.left, fa.left)) : fab : (0, exports.isLeft)(fa) ? fa : (0, exports.right)(fab.right(fa.right));
      },
      of: exports.of
    };
  };
  exports.getApplicativeValidation = getApplicativeValidation;
  var getAltValidation = function(SE) {
    return {
      URI: exports.URI,
      _E: undefined,
      map: _map,
      alt: function(me, that) {
        if ((0, exports.isRight)(me)) {
          return me;
        }
        var ea = that();
        return (0, exports.isLeft)(ea) ? (0, exports.left)(SE.concat(me.left, ea.left)) : ea;
      }
    };
  };
  exports.getAltValidation = getAltValidation;
  var map = function(f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? fa : (0, exports.right)(f(fa.right));
    };
  };
  exports.map = map;
  exports.Functor = {
    URI: exports.URI,
    map: _map
  };
  exports.as = (0, function_1.dual)(2, (0, Functor_1.as)(exports.Functor));
  exports.asUnit = (0, Functor_1.asUnit)(exports.Functor);
  exports.of = exports.right;
  exports.Pointed = {
    URI: exports.URI,
    of: exports.of
  };
  var apW = function(fa) {
    return function(fab) {
      return (0, exports.isLeft)(fab) ? fab : (0, exports.isLeft)(fa) ? fa : (0, exports.right)(fab.right(fa.right));
    };
  };
  exports.apW = apW;
  exports.ap = exports.apW;
  exports.Apply = {
    URI: exports.URI,
    map: _map,
    ap: _ap
  };
  exports.Applicative = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of
  };
  exports.Chain = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: exports.flatMap
  };
  exports.Monad = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: exports.flatMap
  };
  var reduce = function(b2, f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? b2 : f(b2, fa.right);
    };
  };
  exports.reduce = reduce;
  var foldMap = function(M) {
    return function(f) {
      return function(fa) {
        return (0, exports.isLeft)(fa) ? M.empty : f(fa.right);
      };
    };
  };
  exports.foldMap = foldMap;
  var reduceRight = function(b2, f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? b2 : f(fa.right, b2);
    };
  };
  exports.reduceRight = reduceRight;
  exports.Foldable = {
    URI: exports.URI,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight
  };
  var traverse = function(F) {
    return function(f) {
      return function(ta) {
        return (0, exports.isLeft)(ta) ? F.of((0, exports.left)(ta.left)) : F.map(f(ta.right), exports.right);
      };
    };
  };
  exports.traverse = traverse;
  var sequence = function(F) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? F.of((0, exports.left)(ma.left)) : F.map(ma.right, exports.right);
    };
  };
  exports.sequence = sequence;
  exports.Traversable = {
    URI: exports.URI,
    map: _map,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence
  };
  var bimap = function(f, g) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? (0, exports.left)(f(fa.left)) : (0, exports.right)(g(fa.right));
    };
  };
  exports.bimap = bimap;
  var mapLeft = function(f) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? (0, exports.left)(f(fa.left)) : fa;
    };
  };
  exports.mapLeft = mapLeft;
  exports.Bifunctor = {
    URI: exports.URI,
    bimap: _bimap,
    mapLeft: _mapLeft
  };
  var altW = function(that) {
    return function(fa) {
      return (0, exports.isLeft)(fa) ? that() : fa;
    };
  };
  exports.altW = altW;
  exports.alt = exports.altW;
  exports.Alt = {
    URI: exports.URI,
    map: _map,
    alt: _alt
  };
  var extend = function(f) {
    return function(wa) {
      return (0, exports.isLeft)(wa) ? wa : (0, exports.right)(f(wa));
    };
  };
  exports.extend = extend;
  exports.Extend = {
    URI: exports.URI,
    map: _map,
    extend: _extend
  };
  exports.ChainRec = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    chain: exports.flatMap,
    chainRec: _chainRec
  };
  exports.throwError = exports.left;
  exports.MonadThrow = {
    URI: exports.URI,
    map: _map,
    ap: _ap,
    of: exports.of,
    chain: exports.flatMap,
    throwError: exports.throwError
  };
  exports.FromEither = {
    URI: exports.URI,
    fromEither: function_1.identity
  };
  exports.fromPredicate = (0, FromEither_1.fromPredicate)(exports.FromEither);
  exports.fromOption = (0, FromEither_1.fromOption)(exports.FromEither);
  exports.isLeft = _.isLeft;
  exports.isRight = _.isRight;
  var matchW = function(onLeft, onRight) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : onRight(ma.right);
    };
  };
  exports.matchW = matchW;
  exports.foldW = exports.matchW;
  exports.match = exports.matchW;
  exports.fold = exports.match;
  var getOrElseW = function(onLeft) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : ma.right;
    };
  };
  exports.getOrElseW = getOrElseW;
  exports.getOrElse = exports.getOrElseW;
  exports.flap = (0, Functor_1.flap)(exports.Functor);
  exports.apFirst = (0, Apply_1.apFirst)(exports.Apply);
  exports.apFirstW = exports.apFirst;
  exports.apSecond = (0, Apply_1.apSecond)(exports.Apply);
  exports.apSecondW = exports.apSecond;
  exports.tap = (0, function_1.dual)(2, chainable.tap(exports.Chain));
  exports.flattenW = (0, exports.flatMap)(function_1.identity);
  exports.flatten = exports.flattenW;
  exports.duplicate = (0, exports.extend)(function_1.identity);
  exports.fromOptionK = (0, FromEither_1.fromOptionK)(exports.FromEither);
  exports.chainOptionK = (0, FromEither_1.chainOptionK)(exports.FromEither, exports.Chain);
  exports.chainOptionKW = exports.chainOptionK;
  var _FromEither = {
    fromEither: exports.FromEither.fromEither
  };
  exports.liftNullable = _.liftNullable(_FromEither);
  exports.liftOption = _.liftOption(_FromEither);
  var _FlatMap = {
    flatMap: exports.flatMap
  };
  exports.flatMapNullable = _.flatMapNullable(_FromEither, _FlatMap);
  exports.flatMapOption = _.flatMapOption(_FromEither, _FlatMap);
  exports.filterOrElse = (0, FromEither_1.filterOrElse)(exports.FromEither, exports.Chain);
  exports.filterOrElseW = exports.filterOrElse;
  var swap = function(ma) {
    return (0, exports.isLeft)(ma) ? (0, exports.right)(ma.left) : (0, exports.left)(ma.right);
  };
  exports.swap = swap;
  var orElseW = function(onLeft) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? onLeft(ma.left) : ma;
    };
  };
  exports.orElseW = orElseW;
  exports.orElse = exports.orElseW;
  var fromNullable = function(e) {
    return function(a) {
      return a == null ? (0, exports.left)(e) : (0, exports.right)(a);
    };
  };
  exports.fromNullable = fromNullable;
  var tryCatch = function(f, onThrow) {
    try {
      return (0, exports.right)(f());
    } catch (e) {
      return (0, exports.left)(onThrow(e));
    }
  };
  exports.tryCatch = tryCatch;
  var tryCatchK = function(f, onThrow) {
    return function() {
      var a = [];
      for (var _i = 0;_i < arguments.length; _i++) {
        a[_i] = arguments[_i];
      }
      return (0, exports.tryCatch)(function() {
        return f.apply(undefined, a);
      }, onThrow);
    };
  };
  exports.tryCatchK = tryCatchK;
  var fromNullableK = function(e) {
    var from = (0, exports.fromNullable)(e);
    return function(f) {
      return (0, function_1.flow)(f, from);
    };
  };
  exports.fromNullableK = fromNullableK;
  var chainNullableK = function(e) {
    var from = (0, exports.fromNullableK)(e);
    return function(f) {
      return (0, exports.flatMap)(from(f));
    };
  };
  exports.chainNullableK = chainNullableK;
  exports.toUnion = (0, exports.foldW)(function_1.identity, function_1.identity);
  exports.toError = toError;
  exports.elem = elem;
  var exists = function(predicate) {
    return function(ma) {
      return (0, exports.isLeft)(ma) ? false : predicate(ma.right);
    };
  };
  exports.exists = exists;
  exports.Do = (0, exports.of)(_.emptyRecord);
  exports.bindTo = (0, Functor_1.bindTo)(exports.Functor);
  var let_ = (0, Functor_1.let)(exports.Functor);
  exports.let = let_;
  exports.bind = chainable.bind(exports.Chain);
  exports.bindW = exports.bind;
  exports.apS = (0, Apply_1.apS)(exports.Apply);
  exports.apSW = exports.apS;
  exports.ApT = (0, exports.of)(_.emptyReadonlyArray);
  var traverseReadonlyNonEmptyArrayWithIndex = function(f) {
    return function(as) {
      var e = f(0, _.head(as));
      if ((0, exports.isLeft)(e)) {
        return e;
      }
      var out = [e.right];
      for (var i = 1;i < as.length; i++) {
        var e_1 = f(i, as[i]);
        if ((0, exports.isLeft)(e_1)) {
          return e_1;
        }
        out.push(e_1.right);
      }
      return (0, exports.right)(out);
    };
  };
  exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;
  var traverseReadonlyArrayWithIndex = function(f) {
    var g = (0, exports.traverseReadonlyNonEmptyArrayWithIndex)(f);
    return function(as) {
      return _.isNonEmpty(as) ? g(as) : exports.ApT;
    };
  };
  exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;
  exports.traverseArrayWithIndex = exports.traverseReadonlyArrayWithIndex;
  var traverseArray = function(f) {
    return (0, exports.traverseReadonlyArrayWithIndex)(function(_2, a) {
      return f(a);
    });
  };
  exports.traverseArray = traverseArray;
  exports.sequenceArray = (0, exports.traverseArray)(function_1.identity);
  exports.chainW = exports.flatMap;
  exports.chain = exports.flatMap;
  exports.chainFirst = exports.tap;
  exports.chainFirstW = exports.tap;
  exports.parseJSON = parseJSON;
  var stringifyJSON = function(u, onError) {
    return (0, exports.tryCatch)(function() {
      var s = JSON.stringify(u);
      if (typeof s !== "string") {
        throw new Error("Converting unsupported structure to JSON");
      }
      return s;
    }, onError);
  };
  exports.stringifyJSON = stringifyJSON;
  exports.either = {
    URI: exports.URI,
    map: _map,
    of: exports.of,
    ap: _ap,
    chain: exports.flatMap,
    reduce: _reduce,
    foldMap: _foldMap,
    reduceRight: _reduceRight,
    traverse: _traverse,
    sequence: exports.sequence,
    bimap: _bimap,
    mapLeft: _mapLeft,
    alt: _alt,
    extend: _extend,
    chainRec: _chainRec,
    throwError: exports.throwError
  };
  exports.getApplySemigroup = (0, Apply_1.getApplySemigroup)(exports.Apply);
  exports.getApplyMonoid = (0, Applicative_1.getApplicativeMonoid)(exports.Applicative);
  var getValidationSemigroup = function(SE, SA) {
    return (0, Apply_1.getApplySemigroup)((0, exports.getApplicativeValidation)(SE))(SA);
  };
  exports.getValidationSemigroup = getValidationSemigroup;
  var getValidationMonoid = function(SE, MA) {
    return (0, Applicative_1.getApplicativeMonoid)((0, exports.getApplicativeValidation)(SE))(MA);
  };
  exports.getValidationMonoid = getValidationMonoid;
  exports.getValidation = getValidation;
});

// node_modules/postgres/src/index.js
import os from "os";
import fs from "fs";

// node_modules/postgres/src/query.js
var cachedError = function(xs) {
  if (originCache.has(xs))
    return originCache.get(xs);
  const x = Error.stackTraceLimit;
  Error.stackTraceLimit = 4;
  originCache.set(xs, new Error);
  Error.stackTraceLimit = x;
  return originCache.get(xs);
};
var originCache = new Map;
var originStackCache = new Map;
var originError = Symbol("OriginError");
var CLOSE = {};

class Query extends Promise {
  constructor(strings, args, handler, canceller, options = {}) {
    let resolve, reject;
    super((a, b) => {
      resolve = a;
      reject = b;
    });
    this.tagged = Array.isArray(strings.raw);
    this.strings = strings;
    this.args = args;
    this.handler = handler;
    this.canceller = canceller;
    this.options = options;
    this.state = null;
    this.statement = null;
    this.resolve = (x) => (this.active = false, resolve(x));
    this.reject = (x) => (this.active = false, reject(x));
    this.active = false;
    this.cancelled = null;
    this.executed = false;
    this.signature = "";
    this[originError] = this.handler.debug ? new Error : this.tagged && cachedError(this.strings);
  }
  get origin() {
    return (this.handler.debug ? this[originError].stack : this.tagged && originStackCache.has(this.strings) ? originStackCache.get(this.strings) : originStackCache.set(this.strings, this[originError].stack).get(this.strings)) || "";
  }
  static get [Symbol.species]() {
    return Promise;
  }
  cancel() {
    return this.canceller && (this.canceller(this), this.canceller = null);
  }
  simple() {
    this.options.simple = true;
    this.options.prepare = false;
    return this;
  }
  async readable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  async writable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  cursor(rows = 1, fn) {
    this.options.simple = false;
    if (typeof rows === "function") {
      fn = rows;
      rows = 1;
    }
    this.cursorRows = rows;
    if (typeof fn === "function")
      return this.cursorFn = fn, this;
    let prev;
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => {
          if (this.executed && !this.active)
            return { done: true };
          prev && prev();
          const promise = new Promise((resolve, reject) => {
            this.cursorFn = (value) => {
              resolve({ value, done: false });
              return new Promise((r) => prev = r);
            };
            this.resolve = () => (this.active = false, resolve({ done: true }));
            this.reject = (x) => (this.active = false, reject(x));
          });
          this.execute();
          return promise;
        },
        return() {
          prev && prev(CLOSE);
          return { done: true };
        }
      })
    };
  }
  describe() {
    this.options.simple = false;
    this.onlyDescribe = this.options.prepare = true;
    return this;
  }
  stream() {
    throw new Error(".stream has been renamed to .forEach");
  }
  forEach(fn) {
    this.forEachFn = fn;
    this.handle();
    return this;
  }
  raw() {
    this.isRaw = true;
    return this;
  }
  values() {
    this.isRaw = "values";
    return this;
  }
  async handle() {
    !this.executed && (this.executed = true) && await 1 && this.handler(this);
  }
  execute() {
    this.handle();
    return this;
  }
  then() {
    this.handle();
    return super.then.apply(this, arguments);
  }
  catch() {
    this.handle();
    return super.catch.apply(this, arguments);
  }
  finally() {
    this.handle();
    return super.finally.apply(this, arguments);
  }
}

// node_modules/postgres/src/errors.js
var connection = function(x, options, socket) {
  const { host, port } = socket || options;
  const error = Object.assign(new Error("write " + x + " " + (options.path || host + ":" + port)), {
    code: x,
    errno: x,
    address: options.path || host
  }, options.path ? {} : { port });
  Error.captureStackTrace(error, connection);
  return error;
};
var postgres = function(x) {
  const error = new PostgresError(x);
  Error.captureStackTrace(error, postgres);
  return error;
};
var generic = function(code, message) {
  const error = Object.assign(new Error(code + ": " + message), { code });
  Error.captureStackTrace(error, generic);
  return error;
};
var notSupported = function(x) {
  const error = Object.assign(new Error(x + " (B) is not supported"), {
    code: "MESSAGE_NOT_SUPPORTED",
    name: x
  });
  Error.captureStackTrace(error, notSupported);
  return error;
};

class PostgresError extends Error {
  constructor(x) {
    super(x.message);
    this.name = this.constructor.name;
    Object.assign(this, x);
  }
}
var Errors = {
  connection,
  postgres,
  generic,
  notSupported
};

// node_modules/postgres/src/types.js
function handleValue(x, parameters, types, options) {
  let value = x instanceof Parameter ? x.value : x;
  if (value === undefined) {
    x instanceof Parameter ? x.value = options.transform.undefined : value = x = options.transform.undefined;
    if (value === undefined)
      throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
  }
  return "$" + types.push(x instanceof Parameter ? (parameters.push(x.value), x.array ? x.array[x.type || inferType(x.value)] || x.type || firstIsString(x.value) : x.type) : (parameters.push(x), inferType(x)));
}
function stringify(q, string, value, parameters, types, options) {
  for (let i = 1;i < q.strings.length; i++) {
    string += stringifyValue(string, value, parameters, types, options) + q.strings[i];
    value = q.args[i];
  }
  return string;
}
var stringifyValue = function(string, value, parameters, types, o) {
  return value instanceof Builder ? value.build(string, parameters, types, o) : value instanceof Query ? fragment(value, parameters, types, o) : value instanceof Identifier ? value.value : value && value[0] instanceof Query ? value.reduce((acc, x) => acc + " " + fragment(x, parameters, types, o), "") : handleValue(value, parameters, types, o);
};
var fragment = function(q, parameters, types, options) {
  q.fragment = true;
  return stringify(q, q.strings[0], q.args[0], parameters, types, options);
};
var valuesBuilder = function(first, parameters, types, columns, options) {
  return first.map((row) => "(" + columns.map((column) => stringifyValue("values", row[column], parameters, types, options)).join(",") + ")").join(",");
};
var values = function(first, rest, parameters, types, options) {
  const multi = Array.isArray(first[0]);
  const columns = rest.length ? rest.flat() : Object.keys(multi ? first[0] : first);
  return valuesBuilder(multi ? first : [first], parameters, types, columns, options);
};
var select = function(first, rest, parameters, types, options) {
  typeof first === "string" && (first = [first].concat(rest));
  if (Array.isArray(first))
    return escapeIdentifiers(first, options);
  let value;
  const columns = rest.length ? rest.flat() : Object.keys(first);
  return columns.map((x) => {
    value = first[x];
    return (value instanceof Query ? fragment(value, parameters, types, options) : value instanceof Identifier ? value.value : handleValue(value, parameters, types, options)) + " as " + escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x);
  }).join(",");
};
var notTagged = function() {
  throw Errors.generic("NOT_TAGGED_CALL", "Query not called as a tagged template literal");
};
var firstIsString = function(x) {
  if (Array.isArray(x))
    return firstIsString(x[0]);
  return typeof x === "string" ? 1009 : 0;
};
var typeHandlers = function(types) {
  return Object.keys(types).reduce((acc, k) => {
    types[k].from && [].concat(types[k].from).forEach((x) => acc.parsers[x] = types[k].parse);
    if (types[k].serialize) {
      acc.serializers[types[k].to] = types[k].serialize;
      types[k].from && [].concat(types[k].from).forEach((x) => acc.serializers[x] = types[k].serialize);
    }
    return acc;
  }, { parsers: {}, serializers: {} });
};
var escapeIdentifiers = function(xs, { transform: { column } }) {
  return xs.map((x) => escapeIdentifier(column.to ? column.to(x) : x)).join(",");
};
var arrayEscape = function(x) {
  return x.replace(escapeBackslash, "\\\\").replace(escapeQuote, '\\"');
};
var arrayParserLoop = function(s, x, parser, typarray) {
  const xs = [];
  const delimiter = typarray === 1020 ? ";" : ",";
  for (;s.i < x.length; s.i++) {
    s.char = x[s.i];
    if (s.quoted) {
      if (s.char === "\\") {
        s.str += x[++s.i];
      } else if (s.char === '"') {
        xs.push(parser ? parser(s.str) : s.str);
        s.str = "";
        s.quoted = x[s.i + 1] === '"';
        s.last = s.i + 2;
      } else {
        s.str += s.char;
      }
    } else if (s.char === '"') {
      s.quoted = true;
    } else if (s.char === "{") {
      s.last = ++s.i;
      xs.push(arrayParserLoop(s, x, parser, typarray));
    } else if (s.char === "}") {
      s.quoted = false;
      s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
      break;
    } else if (s.char === delimiter && s.p !== "}" && s.p !== '"') {
      xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
    }
    s.p = s.char;
  }
  s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i + 1)) : x.slice(s.last, s.i + 1));
  return xs;
};
var createJsonTransform = function(fn) {
  return function jsonTransform(x, column) {
    return typeof x === "object" && x !== null && (column.type === 114 || column.type === 3802) ? Array.isArray(x) ? x.map((x2) => jsonTransform(x2, column)) : Object.entries(x).reduce((acc, [k, v]) => Object.assign(acc, { [fn(k)]: jsonTransform(v, column) }), {}) : x;
  };
};
var types = {
  string: {
    to: 25,
    from: null,
    serialize: (x) => "" + x
  },
  number: {
    to: 0,
    from: [21, 23, 26, 700, 701],
    serialize: (x) => "" + x,
    parse: (x) => +x
  },
  json: {
    to: 114,
    from: [114, 3802],
    serialize: (x) => JSON.stringify(x),
    parse: (x) => JSON.parse(x)
  },
  boolean: {
    to: 16,
    from: 16,
    serialize: (x) => x === true ? "t" : "f",
    parse: (x) => x === "t"
  },
  date: {
    to: 1184,
    from: [1082, 1114, 1184],
    serialize: (x) => (x instanceof Date ? x : new Date(x)).toISOString(),
    parse: (x) => new Date(x)
  },
  bytea: {
    to: 17,
    from: 17,
    serialize: (x) => "\\x" + Buffer.from(x).toString("hex"),
    parse: (x) => Buffer.from(x.slice(2), "hex")
  }
};

class NotTagged {
  then() {
    notTagged();
  }
  catch() {
    notTagged();
  }
  finally() {
    notTagged();
  }
}

class Identifier extends NotTagged {
  constructor(value) {
    super();
    this.value = escapeIdentifier(value);
  }
}

class Parameter extends NotTagged {
  constructor(value, type, array) {
    super();
    this.value = value;
    this.type = type;
    this.array = array;
  }
}

class Builder extends NotTagged {
  constructor(first, rest) {
    super();
    this.first = first;
    this.rest = rest;
  }
  build(before, parameters, types2, options) {
    const keyword = builders.map(([x, fn]) => ({ fn, i: before.search(x) })).sort((a, b) => a.i - b.i).pop();
    return keyword.i === -1 ? escapeIdentifiers(this.first, options) : keyword.fn(this.first, this.rest, parameters, types2, options);
  }
}
var defaultHandlers = typeHandlers(types);
var builders = Object.entries({
  values,
  in: (...xs) => {
    const x = values(...xs);
    return x === "()" ? "(null)" : x;
  },
  select,
  as: select,
  returning: select,
  "\\(": select,
  update(first, rest, parameters, types2, options) {
    return (rest.length ? rest.flat() : Object.keys(first)).map((x) => escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x) + "=" + stringifyValue("values", first[x], parameters, types2, options));
  },
  insert(first, rest, parameters, types2, options) {
    const columns = rest.length ? rest.flat() : Object.keys(Array.isArray(first) ? first[0] : first);
    return "(" + escapeIdentifiers(columns, options) + ")values" + valuesBuilder(Array.isArray(first) ? first : [first], parameters, types2, columns, options);
  }
}).map(([x, fn]) => [new RegExp("((?:^|[\\s(])" + x + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), fn]);
var serializers = defaultHandlers.serializers;
var parsers = defaultHandlers.parsers;
var mergeUserTypes = function(types2) {
  const user = typeHandlers(types2 || {});
  return {
    serializers: Object.assign({}, serializers, user.serializers),
    parsers: Object.assign({}, parsers, user.parsers)
  };
};
var escapeIdentifier = function escape(str) {
  return '"' + str.replace(/"/g, '""').replace(/\./g, '"."') + '"';
};
var inferType = function inferType2(x) {
  return x instanceof Parameter ? x.type : x instanceof Date ? 1184 : x instanceof Uint8Array ? 17 : x === true || x === false ? 16 : typeof x === "bigint" ? 20 : Array.isArray(x) ? inferType2(x[0]) : 0;
};
var escapeBackslash = /\\/g;
var escapeQuote = /"/g;
var arraySerializer = function arraySerializer2(xs, serializer, options, typarray) {
  if (Array.isArray(xs) === false)
    return xs;
  if (!xs.length)
    return "{}";
  const first = xs[0];
  const delimiter = typarray === 1020 ? ";" : ",";
  if (Array.isArray(first) && !first.type)
    return "{" + xs.map((x) => arraySerializer2(x, serializer, options, typarray)).join(delimiter) + "}";
  return "{" + xs.map((x) => {
    if (x === undefined) {
      x = options.transform.undefined;
      if (x === undefined)
        throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
    }
    return x === null ? "null" : '"' + arrayEscape(serializer ? serializer(x.type ? x.value : x) : "" + x) + '"';
  }).join(delimiter) + "}";
};
var arrayParserState = {
  i: 0,
  char: null,
  str: "",
  quoted: false,
  last: 0
};
var arrayParser = function arrayParser2(x, parser, typarray) {
  arrayParserState.i = arrayParserState.last = 0;
  return arrayParserLoop(arrayParserState, x, parser, typarray);
};
var toCamel = (x) => {
  let str = x[0];
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toPascal = (x) => {
  let str = x[0].toUpperCase();
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toKebab = (x) => x.replace(/_/g, "-");
var fromCamel = (x) => x.replace(/([A-Z])/g, "_$1").toLowerCase();
var fromPascal = (x) => (x.slice(0, 1) + x.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase();
var fromKebab = (x) => x.replace(/-/g, "_");
toCamel.column = { from: toCamel };
toCamel.value = { from: createJsonTransform(toCamel) };
fromCamel.column = { to: fromCamel };
var camel = { ...toCamel };
camel.column.to = fromCamel;
toPascal.column = { from: toPascal };
toPascal.value = { from: createJsonTransform(toPascal) };
fromPascal.column = { to: fromPascal };
var pascal = { ...toPascal };
pascal.column.to = fromPascal;
toKebab.column = { from: toKebab };
toKebab.value = { from: createJsonTransform(toKebab) };
fromKebab.column = { to: fromKebab };
var kebab = { ...toKebab };
kebab.column.to = fromKebab;

// node_modules/postgres/src/connection.js
import net from "net";
import tls from "tls";
import crypto from "crypto";
import Stream from "stream";
import {performance} from "perf_hooks";

// node_modules/postgres/src/result.js
class Result extends Array {
  constructor() {
    super();
    Object.defineProperties(this, {
      count: { value: null, writable: true },
      state: { value: null, writable: true },
      command: { value: null, writable: true },
      columns: { value: null, writable: true },
      statement: { value: null, writable: true }
    });
  }
  static get [Symbol.species]() {
    return Array;
  }
}

// node_modules/postgres/src/queue.js
var Queue = function(initial = []) {
  let xs = initial.slice();
  let index = 0;
  return {
    get length() {
      return xs.length - index;
    },
    remove: (x) => {
      const index2 = xs.indexOf(x);
      return index2 === -1 ? null : (xs.splice(index2, 1), x);
    },
    push: (x) => (xs.push(x), x),
    shift: () => {
      const out = xs[index++];
      if (index === xs.length) {
        index = 0;
        xs = [];
      } else {
        xs[index - 1] = undefined;
      }
      return out;
    }
  };
};
var queue_default = Queue;

// node_modules/postgres/src/bytes.js
var fit = function(x) {
  if (buffer.length - b.i < x) {
    const prev = buffer, length = prev.length;
    buffer = Buffer.allocUnsafe(length + (length >> 1) + x);
    prev.copy(buffer);
  }
};
var reset = function() {
  b.i = 0;
  return b;
};
var size = 256;
var buffer = Buffer.allocUnsafe(size);
var messages = "BCcDdEFfHPpQSX".split("").reduce((acc, x) => {
  const v = x.charCodeAt(0);
  acc[x] = () => {
    buffer[0] = v;
    b.i = 5;
    return b;
  };
  return acc;
}, {});
var b = Object.assign(reset, messages, {
  N: String.fromCharCode(0),
  i: 0,
  inc(x) {
    b.i += x;
    return b;
  },
  str(x) {
    const length = Buffer.byteLength(x);
    fit(length);
    b.i += buffer.write(x, b.i, length, "utf8");
    return b;
  },
  i16(x) {
    fit(2);
    buffer.writeUInt16BE(x, b.i);
    b.i += 2;
    return b;
  },
  i32(x, i) {
    if (i || i === 0) {
      buffer.writeUInt32BE(x, i);
      return b;
    }
    fit(4);
    buffer.writeUInt32BE(x, b.i);
    b.i += 4;
    return b;
  },
  z(x) {
    fit(x);
    buffer.fill(0, b.i, b.i + x);
    b.i += x;
    return b;
  },
  raw(x) {
    buffer = Buffer.concat([buffer.subarray(0, b.i), x]);
    b.i = buffer.length;
    return b;
  },
  end(at = 1) {
    buffer.writeUInt32BE(b.i - at, at);
    const out = buffer.subarray(0, b.i);
    b.i = 0;
    buffer = Buffer.allocUnsafe(size);
    return out;
  }
});
var bytes_default = b;

// node_modules/postgres/src/connection.js
var Connection = function(options, queues = {}, { onopen = noop, onend = noop, onclose = noop } = {}) {
  const {
    ssl,
    max,
    user,
    host,
    port,
    database,
    parsers: parsers2,
    transform,
    onnotice,
    onnotify,
    onparameter,
    max_pipeline,
    keep_alive,
    backoff,
    target_session_attrs
  } = options;
  const sent = queue_default(), id = uid++, backend = { pid: null, secret: null }, idleTimer = timer(end, options.idle_timeout), lifeTimer = timer(end, options.max_lifetime), connectTimer = timer(connectTimedOut, options.connect_timeout);
  let socket = null, cancelMessage, result2 = new Result, incoming = Buffer.alloc(0), needsTypes = options.fetch_types, backendParameters = {}, statements = {}, statementId = Math.random().toString(36).slice(2), statementCount = 1, closedDate = 0, remaining = 0, hostIndex = 0, retries = 0, length = 0, delay = 0, rows = 0, serverSignature = null, nextWriteTimer = null, terminated = false, incomings = null, results = null, initial = null, ending = null, stream = null, chunk = null, ended = null, nonce = null, query3 = null, final = null;
  const connection2 = {
    queue: queues.closed,
    idleTimer,
    connect(query4) {
      initial = query4 || true;
      reconnect();
    },
    terminate,
    execute,
    cancel,
    end,
    count: 0,
    id
  };
  queues.closed && queues.closed.push(connection2);
  return connection2;
  async function createSocket() {
    let x;
    try {
      x = options.socket ? await Promise.resolve(options.socket(options)) : new net.Socket;
    } catch (e) {
      error(e);
      return;
    }
    x.on("error", error);
    x.on("close", closed);
    x.on("drain", drain);
    return x;
  }
  async function cancel({ pid, secret }, resolve, reject) {
    try {
      cancelMessage = bytes_default().i32(16).i32(80877102).i32(pid).i32(secret).end(16);
      await connect();
      socket.once("error", reject);
      socket.once("close", resolve);
    } catch (error2) {
      reject(error2);
    }
  }
  function execute(q) {
    if (terminated)
      return queryError(q, Errors.connection("CONNECTION_DESTROYED", options));
    if (q.cancelled)
      return;
    try {
      q.state = backend;
      query3 ? sent.push(q) : (query3 = q, query3.active = true);
      build(q);
      return write(toBuffer(q)) && !q.describeFirst && !q.cursorFn && sent.length < max_pipeline && (!q.options.onexecute || q.options.onexecute(connection2));
    } catch (error2) {
      sent.length === 0 && write(Sync);
      errored(error2);
      return true;
    }
  }
  function toBuffer(q) {
    if (q.parameters.length >= 65534)
      throw Errors.generic("MAX_PARAMETERS_EXCEEDED", "Max number of parameters (65534) exceeded");
    return q.options.simple ? bytes_default().Q().str(q.statement.string + bytes_default.N).end() : q.describeFirst ? Buffer.concat([describe(q), Flush]) : q.prepare ? q.prepared ? prepared(q) : Buffer.concat([describe(q), prepared(q)]) : unnamed(q);
  }
  function describe(q) {
    return Buffer.concat([
      Parse(q.statement.string, q.parameters, q.statement.types, q.statement.name),
      Describe("S", q.statement.name)
    ]);
  }
  function prepared(q) {
    return Buffer.concat([
      Bind(q.parameters, q.statement.types, q.statement.name, q.cursorName),
      q.cursorFn ? Execute("", q.cursorRows) : ExecuteUnnamed
    ]);
  }
  function unnamed(q) {
    return Buffer.concat([
      Parse(q.statement.string, q.parameters, q.statement.types),
      DescribeUnnamed,
      prepared(q)
    ]);
  }
  function build(q) {
    const parameters = [], types3 = [];
    const string = stringify(q, q.strings[0], q.args[0], parameters, types3, options);
    !q.tagged && q.args.forEach((x) => handleValue(x, parameters, types3, options));
    q.prepare = options.prepare && ("prepare" in q.options ? q.options.prepare : true);
    q.string = string;
    q.signature = q.prepare && types3 + string;
    q.onlyDescribe && delete statements[q.signature];
    q.parameters = q.parameters || parameters;
    q.prepared = q.prepare && (q.signature in statements);
    q.describeFirst = q.onlyDescribe || parameters.length && !q.prepared;
    q.statement = q.prepared ? statements[q.signature] : { string, types: types3, name: q.prepare ? statementId + statementCount++ : "" };
    typeof options.debug === "function" && options.debug(id, string, parameters, types3);
  }
  function write(x, fn) {
    chunk = chunk ? Buffer.concat([chunk, x]) : Buffer.from(x);
    if (fn || chunk.length >= 1024)
      return nextWrite(fn);
    nextWriteTimer === null && (nextWriteTimer = setImmediate(nextWrite));
    return true;
  }
  function nextWrite(fn) {
    const x = socket.write(chunk, fn);
    nextWriteTimer !== null && clearImmediate(nextWriteTimer);
    chunk = nextWriteTimer = null;
    return x;
  }
  function connectTimedOut() {
    errored(Errors.connection("CONNECT_TIMEOUT", options, socket));
    socket.destroy();
  }
  async function secure() {
    write(SSLRequest);
    const canSSL = await new Promise((r) => socket.once("data", (x) => r(x[0] === 83)));
    if (!canSSL && ssl === "prefer")
      return connected();
    socket.removeAllListeners();
    socket = tls.connect({
      socket,
      servername: net.isIP(socket.host) ? undefined : socket.host,
      ...ssl === "require" || ssl === "allow" || ssl === "prefer" ? { rejectUnauthorized: false } : ssl === "verify-full" ? {} : typeof ssl === "object" ? ssl : {}
    });
    socket.on("secureConnect", connected);
    socket.on("error", error);
    socket.on("close", closed);
    socket.on("drain", drain);
  }
  function drain() {
    !query3 && onopen(connection2);
  }
  function data(x) {
    if (incomings) {
      incomings.push(x);
      remaining -= x.length;
      if (remaining >= 0)
        return;
    }
    incoming = incomings ? Buffer.concat(incomings, length - remaining) : incoming.length === 0 ? x : Buffer.concat([incoming, x], incoming.length + x.length);
    while (incoming.length > 4) {
      length = incoming.readUInt32BE(1);
      if (length >= incoming.length) {
        remaining = length - incoming.length;
        incomings = [incoming];
        break;
      }
      try {
        handle(incoming.subarray(0, length + 1));
      } catch (e) {
        query3 && (query3.cursorFn || query3.describeFirst) && write(Sync);
        errored(e);
      }
      incoming = incoming.subarray(length + 1);
      remaining = 0;
      incomings = null;
    }
  }
  async function connect() {
    terminated = false;
    backendParameters = {};
    socket || (socket = await createSocket());
    if (!socket)
      return;
    connectTimer.start();
    if (options.socket)
      return ssl ? secure() : connected();
    socket.on("connect", ssl ? secure : connected);
    if (options.path)
      return socket.connect(options.path);
    socket.ssl = ssl;
    socket.connect(port[hostIndex], host[hostIndex]);
    socket.host = host[hostIndex];
    socket.port = port[hostIndex];
    hostIndex = (hostIndex + 1) % port.length;
  }
  function reconnect() {
    setTimeout(connect, closedDate ? closedDate + delay - performance.now() : 0);
  }
  function connected() {
    try {
      statements = {};
      needsTypes = options.fetch_types;
      statementId = Math.random().toString(36).slice(2);
      statementCount = 1;
      lifeTimer.start();
      socket.on("data", data);
      keep_alive && socket.setKeepAlive && socket.setKeepAlive(true, 1000 * keep_alive);
      const s = StartupMessage();
      write(s);
    } catch (err) {
      error(err);
    }
  }
  function error(err) {
    if (connection2.queue === queues.connecting && options.host[retries + 1])
      return;
    errored(err);
    while (sent.length)
      queryError(sent.shift(), err);
  }
  function errored(err) {
    stream && (stream.destroy(err), stream = null);
    query3 && queryError(query3, err);
    initial && (queryError(initial, err), initial = null);
  }
  function queryError(query4, err) {
    Object.defineProperties(err, {
      stack: { value: err.stack + query4.origin.replace(/.*\n/, "\n"), enumerable: options.debug },
      query: { value: query4.string, enumerable: options.debug },
      parameters: { value: query4.parameters, enumerable: options.debug },
      args: { value: query4.args, enumerable: options.debug },
      types: { value: query4.statement && query4.statement.types, enumerable: options.debug }
    });
    query4.reject(err);
  }
  function end() {
    return ending || (!connection2.reserved && onend(connection2), !connection2.reserved && !initial && !query3 && sent.length === 0 ? (terminate(), new Promise((r) => socket && socket.readyState !== "closed" ? socket.once("close", r) : r())) : ending = new Promise((r) => ended = r));
  }
  function terminate() {
    terminated = true;
    if (stream || query3 || initial || sent.length)
      error(Errors.connection("CONNECTION_DESTROYED", options));
    clearImmediate(nextWriteTimer);
    if (socket) {
      socket.removeListener("data", data);
      socket.removeListener("connect", connected);
      socket.readyState === "open" && socket.end(bytes_default().X().end());
    }
    ended && (ended(), ending = ended = null);
  }
  async function closed(hadError) {
    incoming = Buffer.alloc(0);
    remaining = 0;
    incomings = null;
    clearImmediate(nextWriteTimer);
    socket.removeListener("data", data);
    socket.removeListener("connect", connected);
    idleTimer.cancel();
    lifeTimer.cancel();
    connectTimer.cancel();
    if (socket.encrypted) {
      socket.removeAllListeners();
      socket = null;
    }
    if (initial)
      return reconnect();
    !hadError && (query3 || sent.length) && error(Errors.connection("CONNECTION_CLOSED", options, socket));
    closedDate = performance.now();
    hadError && options.shared.retries++;
    delay = (typeof backoff === "function" ? backoff(options.shared.retries) : backoff) * 1000;
    onclose(connection2, Errors.connection("CONNECTION_CLOSED", options, socket));
  }
  function handle(xs, x = xs[0]) {
    (x === 68 ? DataRow : x === 100 ? CopyData : x === 65 ? NotificationResponse : x === 83 ? ParameterStatus : x === 90 ? ReadyForQuery : x === 67 ? CommandComplete : x === 50 ? BindComplete : x === 49 ? ParseComplete : x === 116 ? ParameterDescription : x === 84 ? RowDescription : x === 82 ? Authentication : x === 110 ? NoData : x === 75 ? BackendKeyData : x === 69 ? ErrorResponse : x === 115 ? PortalSuspended : x === 51 ? CloseComplete : x === 71 ? CopyInResponse : x === 78 ? NoticeResponse : x === 72 ? CopyOutResponse : x === 99 ? CopyDone : x === 73 ? EmptyQueryResponse : x === 86 ? FunctionCallResponse : x === 118 ? NegotiateProtocolVersion : x === 87 ? CopyBothResponse : UnknownMessage)(xs);
  }
  function DataRow(x) {
    let index = 7;
    let length2;
    let column;
    let value;
    const row = query3.isRaw ? new Array(query3.statement.columns.length) : {};
    for (let i = 0;i < query3.statement.columns.length; i++) {
      column = query3.statement.columns[i];
      length2 = x.readInt32BE(index);
      index += 4;
      value = length2 === -1 ? null : query3.isRaw === true ? x.subarray(index, index += length2) : column.parser === undefined ? x.toString("utf8", index, index += length2) : column.parser.array === true ? column.parser(x.toString("utf8", index + 1, index += length2)) : column.parser(x.toString("utf8", index, index += length2));
      query3.isRaw ? row[i] = query3.isRaw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
    }
    query3.forEachFn ? query3.forEachFn(transform.row.from ? transform.row.from(row) : row, result2) : result2[rows++] = transform.row.from ? transform.row.from(row) : row;
  }
  function ParameterStatus(x) {
    const [k, v] = x.toString("utf8", 5, x.length - 1).split(bytes_default.N);
    backendParameters[k] = v;
    if (options.parameters[k] !== v) {
      options.parameters[k] = v;
      onparameter && onparameter(k, v);
    }
  }
  function ReadyForQuery(x) {
    query3 && query3.options.simple && query3.resolve(results || result2);
    query3 = results = null;
    result2 = new Result;
    connectTimer.cancel();
    if (initial) {
      if (target_session_attrs) {
        if (!backendParameters.in_hot_standby || !backendParameters.default_transaction_read_only)
          return fetchState();
        else if (tryNext(target_session_attrs, backendParameters))
          return terminate();
      }
      if (needsTypes) {
        initial === true && (initial = null);
        return fetchArrayTypes();
      }
      initial !== true && execute(initial);
      options.shared.retries = retries = 0;
      initial = null;
      return;
    }
    while (sent.length && (query3 = sent.shift()) && (query3.active = true, query3.cancelled))
      Connection(options).cancel(query3.state, query3.cancelled.resolve, query3.cancelled.reject);
    if (query3)
      return;
    connection2.reserved ? !connection2.reserved.release && x[5] === 73 ? ending ? terminate() : (connection2.reserved = null, onopen(connection2)) : connection2.reserved() : ending ? terminate() : onopen(connection2);
  }
  function CommandComplete(x) {
    rows = 0;
    for (let i = x.length - 1;i > 0; i--) {
      if (x[i] === 32 && x[i + 1] < 58 && result2.count === null)
        result2.count = +x.toString("utf8", i + 1, x.length - 1);
      if (x[i - 1] >= 65) {
        result2.command = x.toString("utf8", 5, i);
        result2.state = backend;
        break;
      }
    }
    final && (final(), final = null);
    if (result2.command === "BEGIN" && max !== 1 && !connection2.reserved)
      return errored(Errors.generic("UNSAFE_TRANSACTION", "Only use sql.begin, sql.reserved or max: 1"));
    if (query3.options.simple)
      return BindComplete();
    if (query3.cursorFn) {
      result2.count && query3.cursorFn(result2);
      write(Sync);
    }
    query3.resolve(result2);
  }
  function ParseComplete() {
    query3.parsing = false;
  }
  function BindComplete() {
    !result2.statement && (result2.statement = query3.statement);
    result2.columns = query3.statement.columns;
  }
  function ParameterDescription(x) {
    const length2 = x.readUInt16BE(5);
    for (let i = 0;i < length2; ++i)
      !query3.statement.types[i] && (query3.statement.types[i] = x.readUInt32BE(7 + i * 4));
    query3.prepare && (statements[query3.signature] = query3.statement);
    query3.describeFirst && !query3.onlyDescribe && (write(prepared(query3)), query3.describeFirst = false);
  }
  function RowDescription(x) {
    if (result2.command) {
      results = results || [result2];
      results.push(result2 = new Result);
      result2.count = null;
      query3.statement.columns = null;
    }
    const length2 = x.readUInt16BE(5);
    let index = 7;
    let start;
    query3.statement.columns = Array(length2);
    for (let i = 0;i < length2; ++i) {
      start = index;
      while (x[index++] !== 0)
        ;
      const table = x.readUInt32BE(index);
      const number = x.readUInt16BE(index + 4);
      const type = x.readUInt32BE(index + 6);
      query3.statement.columns[i] = {
        name: transform.column.from ? transform.column.from(x.toString("utf8", start, index - 1)) : x.toString("utf8", start, index - 1),
        parser: parsers2[type],
        table,
        number,
        type
      };
      index += 18;
    }
    result2.statement = query3.statement;
    if (query3.onlyDescribe)
      return query3.resolve(query3.statement), write(Sync);
  }
  async function Authentication(x, type = x.readUInt32BE(5)) {
    (type === 3 ? AuthenticationCleartextPassword : type === 5 ? AuthenticationMD5Password : type === 10 ? SASL : type === 11 ? SASLContinue : type === 12 ? SASLFinal : type !== 0 ? UnknownAuth : noop)(x, type);
  }
  async function AuthenticationCleartextPassword() {
    const payload = await Pass();
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function AuthenticationMD5Password(x) {
    const payload = "md5" + await md5(Buffer.concat([
      Buffer.from(await md5(await Pass() + user)),
      x.subarray(9)
    ]));
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function SASL() {
    nonce = (await crypto.randomBytes(18)).toString("base64");
    bytes_default().p().str("SCRAM-SHA-256" + bytes_default.N);
    const i = bytes_default.i;
    write(bytes_default.inc(4).str("n,,n=*,r=" + nonce).i32(bytes_default.i - i - 4, i).end());
  }
  async function SASLContinue(x) {
    const res = x.toString("utf8", 9).split(",").reduce((acc, x2) => (acc[x2[0]] = x2.slice(2), acc), {});
    const saltedPassword = await crypto.pbkdf2Sync(await Pass(), Buffer.from(res.s, "base64"), parseInt(res.i), 32, "sha256");
    const clientKey = await hmac(saltedPassword, "Client Key");
    const auth = "n=*,r=" + nonce + ",r=" + res.r + ",s=" + res.s + ",i=" + res.i + ",c=biws,r=" + res.r;
    serverSignature = (await hmac(await hmac(saltedPassword, "Server Key"), auth)).toString("base64");
    const payload = "c=biws,r=" + res.r + ",p=" + xor(clientKey, Buffer.from(await hmac(await sha256(clientKey), auth))).toString("base64");
    write(bytes_default().p().str(payload).end());
  }
  function SASLFinal(x) {
    if (x.toString("utf8", 9).split(bytes_default.N, 1)[0].slice(2) === serverSignature)
      return;
    errored(Errors.generic("SASL_SIGNATURE_MISMATCH", "The server did not return the correct signature"));
    socket.destroy();
  }
  function Pass() {
    return Promise.resolve(typeof options.pass === "function" ? options.pass() : options.pass);
  }
  function NoData() {
    result2.statement = query3.statement;
    result2.statement.columns = [];
    if (query3.onlyDescribe)
      return query3.resolve(query3.statement), write(Sync);
  }
  function BackendKeyData(x) {
    backend.pid = x.readUInt32BE(5);
    backend.secret = x.readUInt32BE(9);
  }
  async function fetchArrayTypes() {
    needsTypes = false;
    const types3 = await new Query([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `], [], execute);
    types3.forEach(({ oid, typarray }) => addArrayType(oid, typarray));
  }
  function addArrayType(oid, typarray) {
    if (!!options.parsers[typarray] && !!options.serializers[typarray])
      return;
    const parser = options.parsers[oid];
    options.shared.typeArrayMap[oid] = typarray;
    options.parsers[typarray] = (xs) => arrayParser(xs, parser, typarray);
    options.parsers[typarray].array = true;
    options.serializers[typarray] = (xs) => arraySerializer(xs, options.serializers[oid], options, typarray);
  }
  function tryNext(x, xs) {
    return x === "read-write" && xs.default_transaction_read_only === "on" || x === "read-only" && xs.default_transaction_read_only === "off" || x === "primary" && xs.in_hot_standby === "on" || x === "standby" && xs.in_hot_standby === "off" || x === "prefer-standby" && xs.in_hot_standby === "off" && options.host[retries];
  }
  function fetchState() {
    const query4 = new Query([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `], [], execute, null, { simple: true });
    query4.resolve = ([[a], [b2]]) => {
      backendParameters.default_transaction_read_only = a.transaction_read_only;
      backendParameters.in_hot_standby = b2.pg_is_in_recovery ? "on" : "off";
    };
    query4.execute();
  }
  function ErrorResponse(x) {
    query3 && (query3.cursorFn || query3.describeFirst) && write(Sync);
    const error2 = Errors.postgres(parseError(x));
    query3 && query3.retried ? errored(query3.retried) : query3 && retryRoutines.has(error2.routine) ? retry(query3, error2) : errored(error2);
  }
  function retry(q, error2) {
    delete statements[q.signature];
    q.retried = error2;
    execute(q);
  }
  function NotificationResponse(x) {
    if (!onnotify)
      return;
    let index = 9;
    while (x[index++] !== 0)
      ;
    onnotify(x.toString("utf8", 9, index - 1), x.toString("utf8", index, x.length - 1));
  }
  async function PortalSuspended() {
    try {
      const x = await Promise.resolve(query3.cursorFn(result2));
      rows = 0;
      x === CLOSE ? write(Close(query3.portal)) : (result2 = new Result, write(Execute("", query3.cursorRows)));
    } catch (err) {
      write(Sync);
      query3.reject(err);
    }
  }
  function CloseComplete() {
    result2.count && query3.cursorFn(result2);
    query3.resolve(result2);
  }
  function CopyInResponse() {
    stream = new Stream.Writable({
      autoDestroy: true,
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query3.resolve(stream);
  }
  function CopyOutResponse() {
    stream = new Stream.Readable({
      read() {
        socket.resume();
      }
    });
    query3.resolve(stream);
  }
  function CopyBothResponse() {
    stream = new Stream.Duplex({
      autoDestroy: true,
      read() {
        socket.resume();
      },
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query3.resolve(stream);
  }
  function CopyData(x) {
    stream && (stream.push(x.subarray(5)) || socket.pause());
  }
  function CopyDone() {
    stream && stream.push(null);
    stream = null;
  }
  function NoticeResponse(x) {
    onnotice ? onnotice(parseError(x)) : console.log(parseError(x));
  }
  function EmptyQueryResponse() {
  }
  function FunctionCallResponse() {
    errored(Errors.notSupported("FunctionCallResponse"));
  }
  function NegotiateProtocolVersion() {
    errored(Errors.notSupported("NegotiateProtocolVersion"));
  }
  function UnknownMessage(x) {
    console.error("Postgres.js : Unknown Message:", x[0]);
  }
  function UnknownAuth(x, type) {
    console.error("Postgres.js : Unknown Auth:", type);
  }
  function Bind(parameters, types3, statement = "", portal = "") {
    let prev, type;
    bytes_default().B().str(portal + bytes_default.N).str(statement + bytes_default.N).i16(0).i16(parameters.length);
    parameters.forEach((x, i) => {
      if (x === null)
        return bytes_default.i32(4294967295);
      type = types3[i];
      parameters[i] = x = (type in options.serializers) ? options.serializers[type](x) : "" + x;
      prev = bytes_default.i;
      bytes_default.inc(4).str(x).i32(bytes_default.i - prev - 4, prev);
    });
    bytes_default.i16(0);
    return bytes_default.end();
  }
  function Parse(str, parameters, types3, name = "") {
    bytes_default().P().str(name + bytes_default.N).str(str + bytes_default.N).i16(parameters.length);
    parameters.forEach((x, i) => bytes_default.i32(types3[i] || 0));
    return bytes_default.end();
  }
  function Describe(x, name = "") {
    return bytes_default().D().str(x).str(name + bytes_default.N).end();
  }
  function Execute(portal = "", rows2 = 0) {
    return Buffer.concat([
      bytes_default().E().str(portal + bytes_default.N).i32(rows2).end(),
      Flush
    ]);
  }
  function Close(portal = "") {
    return Buffer.concat([
      bytes_default().C().str("P").str(portal + bytes_default.N).end(),
      bytes_default().S().end()
    ]);
  }
  function StartupMessage() {
    return cancelMessage || bytes_default().inc(4).i16(3).z(2).str(Object.entries(Object.assign({
      user,
      database,
      client_encoding: "UTF8"
    }, options.connection)).filter(([, v]) => v).map(([k, v]) => k + bytes_default.N + v).join(bytes_default.N)).z(2).end(0);
  }
};
var parseError = function(x) {
  const error = {};
  let start = 5;
  for (let i = 5;i < x.length - 1; i++) {
    if (x[i] === 0) {
      error[errorFields[x[start]]] = x.toString("utf8", start + 1, i);
      start = i + 1;
    }
  }
  return error;
};
var md5 = function(x) {
  return crypto.createHash("md5").update(x).digest("hex");
};
var hmac = function(key, x) {
  return crypto.createHmac("sha256", key).update(x).digest();
};
var sha256 = function(x) {
  return crypto.createHash("sha256").update(x).digest();
};
var xor = function(a, b2) {
  const length = Math.max(a.length, b2.length);
  const buffer2 = Buffer.allocUnsafe(length);
  for (let i = 0;i < length; i++)
    buffer2[i] = a[i] ^ b2[i];
  return buffer2;
};
var timer = function(fn, seconds) {
  seconds = typeof seconds === "function" ? seconds() : seconds;
  if (!seconds)
    return { cancel: noop, start: noop };
  let timer2;
  return {
    cancel() {
      timer2 && (clearTimeout(timer2), timer2 = null);
    },
    start() {
      timer2 && clearTimeout(timer2);
      timer2 = setTimeout(done, seconds * 1000, arguments);
    }
  };
  function done(args) {
    fn.apply(null, args);
    timer2 = null;
  }
};
var connection_default = Connection;
var uid = 1;
var Sync = bytes_default().S().end();
var Flush = bytes_default().H().end();
var SSLRequest = bytes_default().i32(8).i32(80877103).end(8);
var ExecuteUnnamed = Buffer.concat([bytes_default().E().str(bytes_default.N).i32(0).end(), Sync]);
var DescribeUnnamed = bytes_default().D().str("S").str(bytes_default.N).end();
var noop = () => {
};
var retryRoutines = new Set([
  "FetchPreparedStatement",
  "RevalidateCachedQuery",
  "transformAssignedExpr"
]);
var errorFields = {
  83: "severity_local",
  86: "severity",
  67: "code",
  77: "message",
  68: "detail",
  72: "hint",
  80: "position",
  112: "internal_position",
  113: "internal_query",
  87: "where",
  115: "schema_name",
  116: "table_name",
  99: "column_name",
  100: "data type_name",
  110: "constraint_name",
  70: "file",
  76: "line",
  82: "routine"
};

// node_modules/postgres/src/subscribe.js
var Time = function(x) {
  return new Date(Date.UTC(2000, 0, 1) + Number(x / BigInt(1000)));
};
var parse = function(x, state, parsers2, handle, transform) {
  const char = (acc, [k, v]) => (acc[k.charCodeAt(0)] = v, acc);
  Object.entries({
    R: (x2) => {
      let i = 1;
      const r = state[x2.readUInt32BE(i)] = {
        schema: x2.toString("utf8", i += 4, i = x2.indexOf(0, i)) || "pg_catalog",
        table: x2.toString("utf8", i + 1, i = x2.indexOf(0, i + 1)),
        columns: Array(x2.readUInt16BE(i += 2)),
        keys: []
      };
      i += 2;
      let columnIndex = 0, column;
      while (i < x2.length) {
        column = r.columns[columnIndex++] = {
          key: x2[i++],
          name: transform.column.from ? transform.column.from(x2.toString("utf8", i, i = x2.indexOf(0, i))) : x2.toString("utf8", i, i = x2.indexOf(0, i)),
          type: x2.readUInt32BE(i += 1),
          parser: parsers2[x2.readUInt32BE(i)],
          atttypmod: x2.readUInt32BE(i += 4)
        };
        column.key && r.keys.push(column);
        i += 4;
      }
    },
    Y: () => {
    },
    O: () => {
    },
    B: (x2) => {
      state.date = Time(x2.readBigInt64BE(9));
      state.lsn = x2.subarray(1, 9);
    },
    I: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      const { row } = tuples(x2, relation.columns, i += 7, transform);
      handle(row, {
        command: "insert",
        relation
      });
    },
    D: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      handle(key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform).row : null, {
        command: "delete",
        relation,
        key
      });
    },
    U: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      const xs = key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform) : null;
      xs && (i = xs.i);
      const { row } = tuples(x2, relation.columns, i + 3, transform);
      handle(row, {
        command: "update",
        relation,
        key,
        old: xs && xs.row
      });
    },
    T: () => {
    },
    C: () => {
    }
  }).reduce(char, {})[x[0]](x);
};
var tuples = function(x, columns, xi, transform) {
  let type, column, value;
  const row = transform.raw ? new Array(columns.length) : {};
  for (let i = 0;i < columns.length; i++) {
    type = x[xi++];
    column = columns[i];
    value = type === 110 ? null : type === 117 ? undefined : column.parser === undefined ? x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)) : column.parser.array === true ? column.parser(x.toString("utf8", xi + 5, xi += 4 + x.readUInt32BE(xi))) : column.parser(x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)));
    transform.raw ? row[i] = transform.raw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
  }
  return { i: xi, row: transform.row.from ? transform.row.from(row) : row };
};
var parseEvent = function(x) {
  const xs = x.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || [];
  if (!xs)
    throw new Error("Malformed subscribe pattern: " + x);
  const [, command, path, key] = xs;
  return (command || "*") + (path ? ":" + (path.indexOf(".") === -1 ? "public." + path : path) : "") + (key ? "=" + key : "");
};
var noop2 = () => {
};
function Subscribe(postgres2, options) {
  const subscribers = new Map, slot = "postgresjs_" + Math.random().toString(36).slice(2), state = {};
  let connection2, stream, ended = false;
  const sql = subscribe.sql = postgres2({
    ...options,
    transform: { column: {}, value: {}, row: {} },
    max: 1,
    fetch_types: false,
    idle_timeout: null,
    max_lifetime: null,
    connection: {
      ...options.connection,
      replication: "database"
    },
    onclose: async function() {
      if (ended)
        return;
      stream = null;
      state.pid = state.secret = undefined;
      connected(await init(sql, slot, options.publications));
      subscribers.forEach((event) => event.forEach(({ onsubscribe }) => onsubscribe()));
    },
    no_subscribe: true
  });
  const { end, close } = sql;
  sql.end = async () => {
    ended = true;
    stream && await new Promise((r) => (stream.once("close", r), stream.end()));
    return end();
  };
  sql.close = async () => {
    stream && await new Promise((r) => (stream.once("close", r), stream.end()));
    return close();
  };
  return subscribe;
  async function subscribe(event, fn, onsubscribe = noop2) {
    event = parseEvent(event);
    if (!connection2)
      connection2 = init(sql, slot, options.publications);
    const subscriber = { fn, onsubscribe };
    const fns = subscribers.has(event) ? subscribers.get(event).add(subscriber) : subscribers.set(event, new Set([subscriber])).get(event);
    const unsubscribe = () => {
      fns.delete(subscriber);
      fns.size === 0 && subscribers.delete(event);
    };
    return connection2.then((x) => {
      connected(x);
      onsubscribe();
      return { unsubscribe, state, sql };
    });
  }
  function connected(x) {
    stream = x.stream;
    state.pid = x.state.pid;
    state.secret = x.state.secret;
  }
  async function init(sql2, slot2, publications) {
    if (!publications)
      throw new Error("Missing publication names");
    const xs = await sql2.unsafe(`CREATE_REPLICATION_SLOT ${slot2} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`);
    const [x] = xs;
    const stream2 = await sql2.unsafe(`START_REPLICATION SLOT ${slot2} LOGICAL ${x.consistent_point} (proto_version '1', publication_names '${publications}')`).writable();
    const state2 = {
      lsn: Buffer.concat(x.consistent_point.split("/").map((x2) => Buffer.from(("00000000" + x2).slice(-8), "hex")))
    };
    stream2.on("data", data);
    stream2.on("error", error);
    stream2.on("close", sql2.close);
    return { stream: stream2, state: xs.state };
    function error(e) {
      console.error("Unexpected error during logical streaming - reconnecting", e);
    }
    function data(x2) {
      if (x2[0] === 119)
        parse(x2.subarray(25), state2, sql2.options.parsers, handle, options.transform);
      else if (x2[0] === 107 && x2[17])
        pong();
    }
    function handle(a, b2) {
      const path = b2.relation.schema + "." + b2.relation.table;
      call("*", a, b2);
      call("*:" + path, a, b2);
      b2.relation.keys.length && call("*:" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
      call(b2.command, a, b2);
      call(b2.command + ":" + path, a, b2);
      b2.relation.keys.length && call(b2.command + ":" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
    }
    function pong() {
      const x2 = Buffer.alloc(34);
      x2[0] = "r".charCodeAt(0);
      x2.fill(state2.lsn, 1);
      x2.writeBigInt64BE(BigInt(Date.now() - Date.UTC(2000, 0, 1)) * BigInt(1000), 25);
      stream2.write(x2);
    }
  }
  function call(x, a, b2) {
    subscribers.has(x) && subscribers.get(x).forEach(({ fn }) => fn(a, b2, x));
  }
}

// node_modules/postgres/src/large.js
import Stream2 from "stream";
function largeObject(sql, oid, mode = 131072 | 262144) {
  return new Promise(async (resolve, reject) => {
    await sql.begin(async (sql2) => {
      let finish;
      !oid && ([{ oid }] = await sql2`select lo_creat(-1) as oid`);
      const [{ fd }] = await sql2`select lo_open(${oid}, ${mode}) as fd`;
      const lo = {
        writable,
        readable,
        close: () => sql2`select lo_close(${fd})`.then(finish),
        tell: () => sql2`select lo_tell64(${fd})`,
        read: (x) => sql2`select loread(${fd}, ${x}) as data`,
        write: (x) => sql2`select lowrite(${fd}, ${x})`,
        truncate: (x) => sql2`select lo_truncate64(${fd}, ${x})`,
        seek: (x, whence = 0) => sql2`select lo_lseek64(${fd}, ${x}, ${whence})`,
        size: () => sql2`
          select
            lo_lseek64(${fd}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `
      };
      resolve(lo);
      return new Promise(async (r) => finish = r);
      async function readable({
        highWaterMark = 2048 * 8,
        start = 0,
        end = Infinity
      } = {}) {
        let max = end - start;
        start && await lo.seek(start);
        return new Stream2.Readable({
          highWaterMark,
          async read(size2) {
            const l = size2 > max ? size2 - max : size2;
            max -= size2;
            const [{ data }] = await lo.read(l);
            this.push(data);
            if (data.length < size2)
              this.push(null);
          }
        });
      }
      async function writable({
        highWaterMark = 2048 * 8,
        start = 0
      } = {}) {
        start && await lo.seek(start);
        return new Stream2.Writable({
          highWaterMark,
          write(chunk, encoding, callback) {
            lo.write(chunk).then(() => callback(), callback);
          }
        });
      }
    }).catch(reject);
  });
}

// node_modules/postgres/src/index.js
var Postgres = function(a, b2) {
  const options = parseOptions(a, b2), subscribe2 = options.no_subscribe || Subscribe(Postgres, { ...options });
  let ending = false;
  const queries = queue_default(), connecting = queue_default(), reserved = queue_default(), closed = queue_default(), ended = queue_default(), open = queue_default(), busy = queue_default(), full = queue_default(), queues = { connecting, reserved, closed, ended, open, busy, full };
  const connections = [...Array(options.max)].map(() => connection_default(options, queues, { onopen, onend, onclose }));
  const sql = Sql(handler);
  Object.assign(sql, {
    get parameters() {
      return options.parameters;
    },
    largeObject: largeObject.bind(null, sql),
    subscribe: subscribe2,
    CLOSE,
    END: CLOSE,
    PostgresError,
    options,
    reserve,
    listen,
    begin,
    close,
    end
  });
  return sql;
  function Sql(handler2) {
    handler2.debug = options.debug;
    Object.entries(options.types).reduce((acc, [name, type]) => {
      acc[name] = (x) => new Parameter(x, type.to);
      return acc;
    }, typed);
    Object.assign(sql2, {
      types: typed,
      typed,
      unsafe,
      notify,
      array,
      json,
      file
    });
    return sql2;
    function typed(value, type) {
      return new Parameter(value, type);
    }
    function sql2(strings, ...args) {
      const query4 = strings && Array.isArray(strings.raw) ? new Query(strings, args, handler2, cancel) : typeof strings === "string" && !args.length ? new Identifier(options.transform.column.to ? options.transform.column.to(strings) : strings) : new Builder(strings, args);
      return query4;
    }
    function unsafe(string, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query4 = new Query([string], args, handler2, cancel, {
        prepare: false,
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query4;
    }
    function file(path, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query4 = new Query([], args, (query5) => {
        fs.readFile(path, "utf8", (err, string) => {
          if (err)
            return query5.reject(err);
          query5.strings = [string];
          handler2(query5);
        });
      }, cancel, {
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query4;
    }
  }
  async function listen(name, fn, onlisten) {
    const listener = { fn, onlisten };
    const sql2 = listen.sql || (listen.sql = Postgres({
      ...options,
      max: 1,
      idle_timeout: null,
      max_lifetime: null,
      fetch_types: false,
      onclose() {
        Object.entries(listen.channels).forEach(([name2, { listeners }]) => {
          delete listen.channels[name2];
          Promise.all(listeners.map((l) => listen(name2, l.fn, l.onlisten).catch(() => {
          })));
        });
      },
      onnotify(c, x) {
        (c in listen.channels) && listen.channels[c].listeners.forEach((l) => l.fn(x));
      }
    }));
    const channels = listen.channels || (listen.channels = {}), exists = name in channels;
    if (exists) {
      channels[name].listeners.push(listener);
      const result3 = await channels[name].result;
      listener.onlisten && listener.onlisten();
      return { state: result3.state, unlisten };
    }
    channels[name] = { result: sql2`listen ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`, listeners: [listener] };
    const result2 = await channels[name].result;
    listener.onlisten && listener.onlisten();
    return { state: result2.state, unlisten };
    async function unlisten() {
      if ((name in channels) === false)
        return;
      channels[name].listeners = channels[name].listeners.filter((x) => x !== listener);
      if (channels[name].listeners.length)
        return;
      delete channels[name];
      return sql2`unlisten ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`;
    }
  }
  async function notify(channel, payload) {
    return await sql`select pg_notify(${channel}, ${"" + payload})`;
  }
  async function reserve() {
    const queue3 = queue_default();
    const c = open.length ? open.shift() : await new Promise((r) => {
      queries.push({ reserve: r });
      closed.length && connect(closed.shift());
    });
    move(c, reserved);
    c.reserved = () => queue3.length ? c.execute(queue3.shift()) : move(c, reserved);
    c.reserved.release = true;
    const sql2 = Sql(handler2);
    sql2.release = () => {
      c.reserved = null;
      onopen(c);
    };
    return sql2;
    function handler2(q) {
      c.queue === full ? queue3.push(q) : c.execute(q) || move(c, full);
    }
  }
  async function begin(options2, fn) {
    !fn && (fn = options2, options2 = "");
    const queries2 = queue_default();
    let savepoints = 0, connection3, prepare = null;
    try {
      await sql.unsafe("begin " + options2.replace(/[^a-z ]/ig, ""), [], { onexecute }).execute();
      return await Promise.race([
        scope(connection3, fn),
        new Promise((_, reject) => connection3.onclose = reject)
      ]);
    } catch (error) {
      throw error;
    }
    async function scope(c, fn2, name) {
      const sql2 = Sql(handler2);
      sql2.savepoint = savepoint;
      sql2.prepare = (x) => prepare = x.replace(/[^a-z0-9$-_. ]/gi);
      let uncaughtError, result2;
      name && await sql2`savepoint ${sql2(name)}`;
      try {
        result2 = await new Promise((resolve, reject) => {
          const x = fn2(sql2);
          Promise.resolve(Array.isArray(x) ? Promise.all(x) : x).then(resolve, reject);
        });
        if (uncaughtError)
          throw uncaughtError;
      } catch (e) {
        await (name ? sql2`rollback to ${sql2(name)}` : sql2`rollback`);
        throw e instanceof PostgresError && e.code === "25P02" && uncaughtError || e;
      }
      if (!name) {
        prepare ? await sql2`prepare transaction '${sql2.unsafe(prepare)}'` : await sql2`commit`;
      }
      return result2;
      function savepoint(name2, fn3) {
        if (name2 && Array.isArray(name2.raw))
          return savepoint((sql3) => sql3.apply(sql3, arguments));
        arguments.length === 1 && (fn3 = name2, name2 = null);
        return scope(c, fn3, "s" + savepoints++ + (name2 ? "_" + name2 : ""));
      }
      function handler2(q) {
        q.catch((e) => uncaughtError || (uncaughtError = e));
        c.queue === full ? queries2.push(q) : c.execute(q) || move(c, full);
      }
    }
    function onexecute(c) {
      connection3 = c;
      move(c, reserved);
      c.reserved = () => queries2.length ? c.execute(queries2.shift()) : move(c, reserved);
    }
  }
  function move(c, queue3) {
    c.queue.remove(c);
    queue3.push(c);
    c.queue = queue3;
    queue3 === open ? c.idleTimer.start() : c.idleTimer.cancel();
    return c;
  }
  function json(x) {
    return new Parameter(x, 3802);
  }
  function array(x, type) {
    if (!Array.isArray(x))
      return array(Array.from(arguments));
    return new Parameter(x, type || (x.length ? inferType(x) || 25 : 0), options.shared.typeArrayMap);
  }
  function handler(query4) {
    if (ending)
      return query4.reject(Errors.connection("CONNECTION_ENDED", options, options));
    if (open.length)
      return go(open.shift(), query4);
    if (closed.length)
      return connect(closed.shift(), query4);
    busy.length ? go(busy.shift(), query4) : queries.push(query4);
  }
  function go(c, query4) {
    return c.execute(query4) ? move(c, busy) : move(c, full);
  }
  function cancel(query4) {
    return new Promise((resolve, reject) => {
      query4.state ? query4.active ? connection_default(options).cancel(query4.state, resolve, reject) : query4.cancelled = { resolve, reject } : (queries.remove(query4), query4.cancelled = true, query4.reject(Errors.generic("57014", "canceling statement due to user request")), resolve());
    });
  }
  async function end({ timeout = null } = {}) {
    if (ending)
      return ending;
    await 1;
    let timer2;
    return ending = Promise.race([
      new Promise((r) => timeout !== null && (timer2 = setTimeout(destroy, timeout * 1000, r))),
      Promise.all(connections.map((c) => c.end()).concat(listen.sql ? listen.sql.end({ timeout: 0 }) : [], subscribe2.sql ? subscribe2.sql.end({ timeout: 0 }) : []))
    ]).then(() => clearTimeout(timer2));
  }
  async function close() {
    await Promise.all(connections.map((c) => c.end()));
  }
  async function destroy(resolve) {
    await Promise.all(connections.map((c) => c.terminate()));
    while (queries.length)
      queries.shift().reject(Errors.connection("CONNECTION_DESTROYED", options));
    resolve();
  }
  function connect(c, query4) {
    move(c, connecting);
    c.connect(query4);
    return c;
  }
  function onend(c) {
    move(c, ended);
  }
  function onopen(c) {
    if (queries.length === 0)
      return move(c, open);
    let max = Math.ceil(queries.length / (connecting.length + 1)), ready = true;
    while (ready && queries.length && max-- > 0) {
      const query4 = queries.shift();
      if (query4.reserve)
        return query4.reserve(c);
      ready = c.execute(query4);
    }
    ready ? move(c, busy) : move(c, full);
  }
  function onclose(c, e) {
    move(c, closed);
    c.reserved = null;
    c.onclose && (c.onclose(e), c.onclose = null);
    options.onclose && options.onclose(c.id);
    queries.length && connect(c, queries.shift());
  }
};
var parseOptions = function(a, b2) {
  if (a && a.shared)
    return a;
  const env = process.env, o = (!a || typeof a === "string" ? b2 : a) || {}, { url, multihost } = parseUrl(a), query4 = [...url.searchParams].reduce((a2, [b3, c]) => (a2[b3] = c, a2), {}), host = o.hostname || o.host || multihost || url.hostname || env.PGHOST || "localhost", port = o.port || url.port || env.PGPORT || 5432, user = o.user || o.username || url.username || env.PGUSERNAME || env.PGUSER || osUsername();
  o.no_prepare && (o.prepare = false);
  query4.sslmode && (query4.ssl = query4.sslmode, delete query4.sslmode);
  ("timeout" in o) && (console.log("The timeout option is deprecated, use idle_timeout instead"), o.idle_timeout = o.timeout);
  query4.sslrootcert === "system" && (query4.ssl = "verify-full");
  const ints = ["idle_timeout", "connect_timeout", "max_lifetime", "max_pipeline", "backoff", "keep_alive"];
  const defaults = {
    max: 10,
    ssl: false,
    idle_timeout: null,
    connect_timeout: 30,
    max_lifetime,
    max_pipeline: 100,
    backoff,
    keep_alive: 60,
    prepare: true,
    debug: false,
    fetch_types: true,
    publications: "alltables",
    target_session_attrs: null
  };
  return {
    host: Array.isArray(host) ? host : host.split(",").map((x) => x.split(":")[0]),
    port: Array.isArray(port) ? port : host.split(",").map((x) => parseInt(x.split(":")[1] || port)),
    path: o.path || host.indexOf("/") > -1 && host + "/.s.PGSQL." + port,
    database: o.database || o.db || (url.pathname || "").slice(1) || env.PGDATABASE || user,
    user,
    pass: o.pass || o.password || url.password || env.PGPASSWORD || "",
    ...Object.entries(defaults).reduce((acc, [k, d]) => {
      const value = k in o ? o[k] : (k in query4) ? query4[k] === "disable" || query4[k] === "false" ? false : query4[k] : env["PG" + k.toUpperCase()] || d;
      acc[k] = typeof value === "string" && ints.includes(k) ? +value : value;
      return acc;
    }, {}),
    connection: {
      application_name: "postgres.js",
      ...o.connection,
      ...Object.entries(query4).reduce((acc, [k, v]) => ((k in defaults) || (acc[k] = v), acc), {})
    },
    types: o.types || {},
    target_session_attrs: tsa(o, url, env),
    onnotice: o.onnotice,
    onnotify: o.onnotify,
    onclose: o.onclose,
    onparameter: o.onparameter,
    socket: o.socket,
    transform: parseTransform(o.transform || { undefined: undefined }),
    parameters: {},
    shared: { retries: 0, typeArrayMap: {} },
    ...mergeUserTypes(o.types)
  };
};
var tsa = function(o, url, env) {
  const x = o.target_session_attrs || url.searchParams.get("target_session_attrs") || env.PGTARGETSESSIONATTRS;
  if (!x || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(x))
    return x;
  throw new Error("target_session_attrs " + x + " is not supported");
};
var backoff = function(retries) {
  return (0.5 + Math.random() / 2) * Math.min(3 ** retries / 100, 20);
};
var max_lifetime = function() {
  return 60 * (30 + Math.random() * 30);
};
var parseTransform = function(x) {
  return {
    undefined: x.undefined,
    column: {
      from: typeof x.column === "function" ? x.column : x.column && x.column.from,
      to: x.column && x.column.to
    },
    value: {
      from: typeof x.value === "function" ? x.value : x.value && x.value.from,
      to: x.value && x.value.to
    },
    row: {
      from: typeof x.row === "function" ? x.row : x.row && x.row.from,
      to: x.row && x.row.to
    }
  };
};
var parseUrl = function(url) {
  if (!url || typeof url !== "string")
    return { url: { searchParams: new Map } };
  let host = url;
  host = host.slice(host.indexOf("://") + 3).split(/[?/]/)[0];
  host = decodeURIComponent(host.slice(host.indexOf("@") + 1));
  const urlObj = new URL(url.replace(host, host.split(",")[0]));
  return {
    url: {
      username: decodeURIComponent(urlObj.username),
      password: decodeURIComponent(urlObj.password),
      host: urlObj.host,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      searchParams: urlObj.searchParams
    },
    multihost: host.indexOf(",") > -1 && host
  };
};
var osUsername = function() {
  try {
    return os.userInfo().username;
  } catch (_) {
    return process.env.USERNAME || process.env.USER || process.env.LOGNAME;
  }
};
Object.assign(Postgres, {
  PostgresError,
  toPascal,
  pascal,
  toCamel,
  camel,
  toKebab,
  kebab,
  fromPascal,
  fromCamel,
  fromKebab,
  BigInt: {
    to: 20,
    from: [20],
    parse: (x) => BigInt(x),
    serialize: (x) => x.toString()
  }
});
var src_default = Postgres;

// src/main.ts
var E = __toESM(require_Either(), 1);
var function2 = __toESM(require_function(), 1);

// src/common/data-type-dictionary.ts
var data_type_dictionary = {
  bigint: "bigint",
  bigserial: "bigint",
  bit: "string",
  "bit varying": "string",
  boolean: "boolean",
  box: "string",
  bytea: "string",
  character: "string",
  "character varying": "string",
  cidr: "string",
  circle: "string",
  date: "Date",
  "double precision": "number",
  inet: "string",
  integer: "number",
  interval: "string",
  json: "object",
  jsonb: "object",
  line: "string",
  lseg: "string",
  macaddr: "string",
  macaddr8: "string",
  money: "",
  numeric: "number",
  path: "string",
  pg_lsn: "string",
  pg_snapshot: "string",
  point: "string",
  polygon: "string",
  real: "number",
  smallint: "number",
  smallserial: "number",
  serial: "number",
  text: "string",
  time: "",
  timestamp: "",
  tsquery: "string",
  tsvector: "string",
  txid_snapshot: "string",
  uuid: "string",
  xml: "string"
};

// src/common/common.ts
var getArgvValue = (argv, tag) => argv[argv.indexOf(tag) + 1];
var capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var singularize = (word) => {
  const endings = {
    ves: "fe",
    ies: "y",
    i: "us",
    zes: "ze",
    ses: "s",
    es: "e",
    s: ""
  };
  return word.replace(new RegExp(`(${Object.keys(endings).join("|")})\$`), (r) => endings[r]);
};

// src/main.ts
var CONNECTION_STRING = getArgvValue(process.argv, "--database");
var TABLE_NAME = getArgvValue(process.argv, "--table");
var parse_db_connection_url = (db_connection_url) => {
  try {
    const url = new URL(db_connection_url);
    const host = url.hostname;
    const port = parseInt(url.port);
    const database = url.pathname.split("/")[1];
    const username = url.username;
    const password = url.password;
    return E.right({ host, port, database, username, password });
  } catch (error) {
    return E.left(new Error(JSON.stringify(error)));
  }
};
var dbOptions = function2.pipe(CONNECTION_STRING, parse_db_connection_url, E.fold((error) => {
  console.log(error);
  process.exit(1);
}, (dbOptions2) => dbOptions2));
var sql = src_default(dbOptions);
var table_schema = await sql`
    SELECT
        column_name,
        data_type,
        is_nullable    
    FROM
        information_schema.columns
    WHERE
        table_name = ${TABLE_NAME}
    ORDER BY
        ordinal_position;
`;
var interface_name = function2.pipe(TABLE_NAME, singularize, capitalizeFirstLetter);
console.log(`interface ${interface_name} {`);
table_schema.map((item) => {
  console.log(`   ${item.column_name}: ${data_type_dictionary[item.data_type]};`);
});
console.log(`}`);
process.exit(0);
