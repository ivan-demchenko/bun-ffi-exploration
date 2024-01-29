use std::ffi::{c_char, CString};

// utils.rs
#[no_mangle]
pub extern "C" fn fib(mut n: isize) -> isize {
  let mut a: isize = 0;
  let mut b: isize = 1;
  while n > 0 {
    let t = a + b;
    a = b;
    b = t;
    n -= 1;
  }
  a
}

#[no_mangle]
pub extern "C" fn check_number(a: isize) -> *const c_char {
  if a == 0 {
    return CString::new("a is 0").expect("CString::new failed").into_raw()
  }
  CString::new("a is not 0").expect("CString::new failed").into_raw()
}

#[no_mangle]
pub extern "C" fn add(a: isize, b: isize) -> isize {
    a + b
}