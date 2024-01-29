# ffi-experiment

- [Bun FFI](https://bun.sh/docs/api/ffi)
- [Complex data types and the Rust FFI](https://kmdouglass.github.io/posts/complex-data-types-and-the-rust-ffi/)

### Prerequisites

First, install the compilers and runtimes:

- [OCaml](https://ocaml.org/install)
- [Rust](https://www.rust-lang.org/tools/install)
- [Bun](https://bun.sh/docs/installation)

Then run

```bash
bun install
```

### Compile Rust code

```
rustc --crate-type cdylib ./src/utils.rs
```

### Compile OCaml code

- [ ] TBD

### Run Bun code

To run:

```bash
bun run index.ts
```
