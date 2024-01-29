import { dlopen, FFIType, suffix } from "bun:ffi";

const path = `rust_hello_ffi/libutils.${suffix}`;

const lib = dlopen(path, {
  fib: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  add: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  check_number: {
    args: [FFIType.i32],
    returns: FFIType.cstring
  }
});

console.log(
  `Let's add 1 to 2 in rust: ${lib.symbols.add(1, 2)}`
)

const F = 40

console.log(
  `Let's calc ${F}th fib rust: ${lib.symbols.fib(F)}`
)

function fib(n: number): number {
  let a = 0;
  let b = 1;
  while(n-- > 0) {
    let t = a + b;
    a = b;
    b = t;
  }
  return a;
}

console.log(
  `Let's calc ${F}th fib bun:  ${fib(F)}`
)

console.log(
  `Let's check ${F} with rust:  ${lib.symbols.check_number(F)}`
)