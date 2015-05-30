initSidebarItems({"fn":[["copy","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may overlap."],["copy_nonoverlapping","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may *not* overlap."],["null","Creates a null raw pointer."],["null_mut","Creates a null mutable raw pointer."],["read","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged."],["read_and_drop","Variant of read_and_zero that writes the specific drop-flag byte (which may be more appropriate than zero)."],["read_and_zero","Reads the value from `src` and nulls it out without dropping it."],["replace","Replaces the value at `dest` with `src`, returning the old value, without dropping either."],["swap","Swaps the values at two mutable locations of the same type, without deinitialising either. They may overlap, unlike `mem::swap` which is otherwise equivalent."],["write","Overwrites a memory location with the given value without reading or dropping the old value."],["write_bytes","Invokes memset on the specified pointer, setting `count * size_of::<T>()` bytes of memory starting at `dst` to `c`."]],"struct":[["Unique","A wrapper around a raw `*mut T` that indicates that the possessor of this wrapper owns the referent. This in turn implies that the `Unique<T>` is `Send`/`Sync` if `T` is `Send`/`Sync`, unlike a raw `*mut T` (which conveys no particular ownership semantics).  It also implies that the referent of the pointer should not be modified without a unique path to the `Unique` reference. Useful for building abstractions like `Vec<T>` or `Box<T>`, which internally use raw pointers to manage the memory that they own."]]});