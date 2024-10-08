---
sidebar_position: 1
description: Introduction to Rust
---

# Introduction to Rust

For this workshop, we will use the [Rust](https://www.rust-lang.org/) programming language.

## Resources

1. The Rust Programming Language, Chapters [1](https://doc.rust-lang.org/book/ch01-00-getting-started.html), [2](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html), [3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) and [5](https://doc.rust-lang.org/book/ch05-00-structs.html)
2. [Tour of Rust](https://tourofrust.com) step by step tutorial

## Basic programming language concepts for Rust

### Standard library

The standard library is divided into three levels:

| Level | Description | Needs |
|-------|:------------|:------|
| [`core`](https://doc.rust-lang.org/core/index.html) | Provides the required language elements that Rust needs for compiling, like the `Display` and `Debug` traits. Data can only be global items (stored in *.data*) or on the *stack*. | Hardware |
| [`alloc`](https://doc.rust-lang.org/alloc/index.html) | Provides everything from the `core` level plus *heap* allocated data structures like, `Box` and `Vec`. The developer has to provide a memory allocated, like [embedded_alloc](https://docs.rs/embedded-alloc/latest/embedded_alloc/). | Memory Allocator |
| [`std`](https://doc.rust-lang.org/std/index.html) | Provides everything from the `alloc` level plus a lot of features that depend on the platform, including threads and I/O. This is the default level for Windows, Linux, macOS and similar OSes applications. | Operating System |

:::note

This course will mostly use the `core` level of the standard library, as the software has to run on a [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/).

:::

By default, Rust has a set of elements defined in the standard library that are imported into the program of each application. This set is called the *prelude*, and you can look it up in the standard
library [documentation](https://doc.rust-lang.org/std/prelude/index.html).

If a type you want to use is not in the prelude, you must bring that type into scope explicitly with a `use`
statement. Using the `std::io` module gives you a number of useful features, including the ability to accept
user input.

```rust
use std::io; 
```

### The `main` function

The `main` function is the entry point of our program.

```rust
fn main() {
    println!("Hello, world!");
}
```

We use `println!` macro to print messages on the screen.

To insert a placeholder in the `println!` macro, use a *pair of braces* `{}` . We provide the variable name or
expression to replace the provided placeholder outside the string.

```rust
fn main() {

    let name = "Mary";
    let age = 26;

    println!("Hello, {}. You are {} years old", name, age);
    // if the replacements are only variable, one can use the inline version
    println!("Hello, {name}. You are {age} years old");
}
```

### Variables and mutability

We use the `let` keyword to create a variable.

```rust
    let a = 5;
```

By default, in Rust, variables are **immutable** , meaning once a value is tied to a name, you cannot
change that value.

Example:

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

In this case, we will get a compilation error because we are trying to modify the value of `x` from `5` to `6`, but
`x` is immutable, so we cannot make this modification.

Although variables are immutable by default, you can make them **mutable** by adding `mut` in front of the
variable name. Adding `mut` also conveys intent to future readers of the code by indicating that other parts
of the code will modify the value of this variable.

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

Now the value of `x` can become `6`.

### Constants

Like immutable variables, constants are values that are tied to a name and **are not allowed to change**,
but there are some differences between constants and variables.

First of all, you are not allowed to use `mut` with constants. Constants are not only immutable by default,
they are always immutable. You declare constants using the `const` keyword instead of the let keyword .

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

:::info

For a better understanding, please read [chapter 3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) of the documentation.

:::

### Data Types

#### Scalar types

A scalar type represents a single value. Rust has four main scalar types: integers, floating point numbers,
booleans, and characters.

**Integer** → Each variant can be signed or unsigned and has an explicit size.

```rust
let x: i8 = -2;
let y: u16 = 25;
```

| Length              | Signed | Unsigned | C Equivalent | Java Equivalent |
| :----------------: | :------: | :----: | :----: | :----: |
| 8-bit |   `i8`   | `u8` | `char` | `byte`/ `Byte`[^java_unsigned] |
| 16-bit |   `i16`   | `u16` | `short` | `short` / `Short`[^java_unsigned] |
| 32-bit |   `i32`   | `u32` | `int`[^c_int_type] | `int` / `Integer`[^java_unsigned] |
| 64-bit |   `i64`   | `u64` | `long long int` | `long` / `Long`[^java_unsigned] |
| 128-bit |   `i128`   | `u128` | N/A | N/A |
| arch |   `isize`   | `usize` | N/A | N/A |

**Floating Point** → Rust's floating point types are `f32` and `f64`, which are 32-bit and 64-bit in size, respectively. The default type is `f64` because on modern CPUs it is about the same speed as `f32` but is capable of more precision. All floating point types are **signed**.

| Length              | Floating point | Java Equivalent|
| :----------------: | :------: | :----: |
| 32-bit | `f32` | `float` |
| 64-bit | `f64` | `double` |

```rust
fn main() {
    let x = 2.0; // f64
    let y1: f32 = 3.0; // f32
    let y2 = 3.0f32; // f32
}
```

**Boolean** → Booleans are one byte in size. Boolean type in Rust is specified using bool.

```rust
let t = true;
let f: bool = false; // with explicit type annotation
```

**Character** → The Rust char type is the most primitive alphabetic type in the language.

```rust
let c = 'z';
let z: char = 'ℤ'; // with explicit type annotation
let heart_eyed_cat = '😻';
```

#### Compound types

**Tuple** → A tuple is a structure used for grouping a number of values ​​with a variety of types into a single compound type. Tuples have a **fixed** length  : once declared, their size cannot increase or decrease.

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
```

**Array** → Unlike a tuple, each element in an array must have the **same type**. Unlike arrays in some other languages, Rust arrays have a **fixed** length.

```rust
let a = [1, 2, 3, 4, 5];
```

:::info

For a better understanding, please read [chapter 3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) of the documentation.

:::

### Functions

We define a function in Rust by entering `fn` keyword followed by a function name and a set of parentheses. Curly braces tell the compiler where the function body begins and ends.

```rust
fn main() {
    println!("Hello, world!");
 
    another_function();
}
 
fn another_function() {
    println!("Another function.");
}
```

#### Parameters

We can define functions with parameters, which are special variables that are part of a function's signature. When a function has parameters, you can provide it with *concrete values* ​​for those parameters, also called *arguments*.

```rust
fn main() {
    // the `another_function` function call has one single argument, the value 5.
    another_function(5);
}
 
// the `another_function`function has one single parameter `x` of type `i32`
fn another_function(x: i32) {
    println!("The value of x is: {x}");
}
```

:::note

In function signatures you must declare the type of each parameter!

:::

#### Declarations vs. expressions

Function bodies consist of a series of instructions optionally ending with an expression.

Declarations are **statements** that perform an action and do not return a value.

Expressions evaluate to a resulting value .

:::info

For a better understanding, please read [chapter 3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) of the documentation.

:::

#### Functions with return values

Functions can return values ​​to the code that calls them. We don't name the return values, but we must declare their type after *an arrow* (`->`). In Rust, the function's return value is synonymous with the value of **the final expression** in a function's body block. You can return earlier from a function by using the `return` keyword and specifying a value, but most functions implicitly return the last expression.

```rust
fn five() -> i32 {
    5
}
 
fn main() {
    let x = five();
    println!("The value of x is: {x}");// "The value of x is: 5"
}
```

:::info

For a better understanding, please read [chapter 3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) of the documentation.

:::

### Control flow

#### if-else

All `if` expressions start with the `if` keyword , followed by a condition. Optionally, we can also include an `else` expression.

```rust
fn main() {
    let number = 3;
 
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```

You can use multiple conditions by combining `if` and `else` in an `else if` expression:

```rust
fn main() {
    let number = 6;
 
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

Because `if` is an expression, we can use it on **the right side** of a `let` statement to assign the result to a variable.

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };
 
    println!("The value of number is: {number}");//"The value of the number is 5"
}
```

#### loop

The `loop` keyword tells Rust to run a block of code over and over forever or until you **explicitly** tell it to stop.

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

One use of a `loop` is to retry an operation that you know might fail, such as checking if a thread has finished its work. You may also need to pass the result of this operation out of the loop to the rest of your code. To do this, you can add the value you want to return after the `break` expression you use to stop the loop; this value will be returned out of the loop so you can use it:

```rust
fn main() {
    let mut counter = 0;
 
    let result = loop {
        counter += 1;
 
        if counter == 10 {
            break counter * 2;
        }
    };
 
    println!("The result is {result}");
}
```

#### while

```rust
fn main() {
    let mut number = 3;
 
    while number != 0 {
        println!("{number}!");
 
        number -= 1;
    }
 
    println!("LIFTOFF!!!");
}
```

#### for

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
 
    for element in a {
        println!("the value is: {element}");
    }
}
```

:::info
For a better understanding, please read [chapter 3](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html) of the documentation.
:::

### Structures

Structs are similar to tuples, in that they both contain multiple related values . Like tuples, pieces of a structure can be of different types. Unlike tuples, in a structure you **will name** each piece of data so that the meaning of the values ​​is clear.

To define a structure, we enter the `struct` keyword and name the entire structure. The name of a structure should describe the meaning of the data elements grouped together. Then, within curly brackets, we define the names and types of the data, which we call **fields**.

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
```

To use a structure after having defined it, we create an **instance** of this structure by specifying concrete values ​​for each of the fields. We create a **stack allocated** instance by specifying the structure name , then add curly braces containing `key:value` pairs , where the keys are the field names and the values ​​are the data we want to store in those fields.

```rust
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
}
```

To access a certain member of the structure we use this syntax:

```rust
fn main() {
    let mut user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
 
    user1.email = String::from("anotheremail@example.com")
}
```

:::warning
Note that the entire instance must be **editable**  ; Rust **doesn't allow us** to mark only certain fields as mutable!
:::

As with any expression, we can construct a new instance of the structure as the last expression in the function body to implicitly return this new instance.

```rust
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username: username,
        email: email,
        sign_in_count: 1,
    }
}
```

If we try to print an instance of `User` using the `println!` macro as we have seen early, it will not work.

```rust
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
 
    println!("User is: {}", user1);
}
```

We will get the following error message:

```sh
error[E0277]: `User` doesn't implement `std::fmt::Display`
```

In order to print a structure, we need to use `{:?}` instead of `{}`, and implement `Debug` trait for the structure with `#[derive(Debug)]`.

:::note

We use `Debug` trait to print structures, arrays, enums or any other type that doesn't implement `Display`.

:::

```rust
#[derive(Debug)]
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
 
    println!("User is: {:?}", user1);

    let x = [1, 2, 3];

    println!("Integer slice: {:?}", x);
}
```

Output:

```
User is: User { active: true, username: "someusername123", email: "someone@example.com", sign_in_count: 1 }
Integer slice: [1, 2, 3]
```

#### Tuple structs

Rust also supports structures that resemble tuples, called **tuple structs** . Tuple structures have the additional meaning provided by the structure name but do not have names associated with their fields; instead, they just have the field types. Tuple structures are useful when you want to name the entire tuple and make it a different type from other tuples, and when naming each field as in a regular structure would be wordy or redundant.

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);
 
fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```

:::info
For a better understanding, please read [chapter 5](https://doc.rust-lang.org/book/ch05-00-structs.html) of the documentation.
:::

### Enums

Enumerations, also referred as `enums`, allow you to define a type by enumerating its possible variants.  
How to define an `enum`:

```rust
enum IpAddrKind {
    V4,
    V6,
}
```

#### Option enum

`Option` is another `enum` defined by the standard library. The `Option` type encodes the very common scenario in which a value can be something or nothing.  

Rust **doesn't have the null** functionality that many other languages ​​have. Null is a value that means there is no value here. In languages ​​with null, variables can always be in one of two states: null or non-null.

As such, Rust does not have null values, but it does have an enumeration that can encode the concept of a value being present or absent. This enumeration is `Option<T>`, and it is defined by the standard library as follows:

```rust
enum Option<T> {
    None,
    Some(T),
}
```

For now, all you need to know is that `<T>` means that the Some variant of the Option enumeration can contain data of **any type**.

```rust
    let some_number = Some(5);
    let some_char = Some('e');
 
    let absent_number: Option<i32> = None;
```

The type of `some_number` is `Option<i32>`. The type of `some_char` is `Option<char>`, which is a different type.

When we have a `Some` value, we know that a value is present and that the value is contained in `Some`. When we have a `None` value, it kind of means the same thing as null: we don't have a valid value.

:::note
You must convert an `Option<T>` to a `T` before you can perform `T` operations with it.
:::

#### Match

Rust has an extremely powerful control flow construct called `match` that allows you to compare a value against a series of patterns and then run code based on which pattern matches. Patterns can consist of literal values, variable names, wildcards, and many other things.

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}
 
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

When the match expression runs, it compares the resulting value to the model for each arm, in order. If a pattern matches the value, the code associated with that pattern is executed. If this pattern does not match the value, execution continues to the next arm.

The code associated with each arm is an **expression** , and the resulting value of the expression in the corresponding arm is the **returned value** for the entire matching expression.

In the previous section, we wanted to extract the internal `T` value of the Some case when using `Option<T>`; we can also handle `Option<T>` using match , like we did with the `Coin` enumeration! Instead of comparing parts, we will compare variants of `Option<T>`, but the way the `match` expression works remains the same.

```rust
    fn get_option(x: Option<i32>) -> Option<i32> {
        match x {
            None => None,
            Some(i) => Some(i),
        }
    }
 
    let five = Some(5);
    let six = get_option(five);
    let none = get_option(None);
```

:::info
For a better understanding, please read [chapter 6](https://doc.rust-lang.org/book/ch06-00-enums.html) of the documentation.
:::

### String

Rust has only one type of string in the core language, which is the string slice `str` which is usually seen in its borrowed form `&str`.

The `String` type , which is provided by the Rust standard library rather than encoded in the main language, is a scalable, mutable, and owned UTF-8 encoded string type .

#### Creating a new String

```rust
    let mut s = String::new();
```

This line creates a new empty string called `s`, which we can then load data into.

We can use the `String::from` function or the `to_string` function to create a string from a string literal:

```rust
    let s = String::from("initial contents");
```

```rust
let data = "initial contents";
 
    let s = data.to_string();
 
    // the method also works on a literal directly:
    let s = "initial contents".to_string();
```

#### Adding to a string

We can expand a string using the `push_str` method to add a string slice.

```rust
let mut s = String::from("foo");
s.push_str("bar");
```

**The push** method takes **a single character** as a parameter and adds it to the string.

```rust
    let mut s = String::from("lo");
    s.push('l');
```

#### Iteration Methods on Strings

The best way to operate on pieces of strings is to be explicit about whether you want characters or bytes. For individual Unicode scalar values, use the `chars` method .

```rust
for c in "Зд".chars() {
    println!("{c}");
}
```

### Run the program

In order to run the program we may be anywhere in the crate's folder and execute the command:

```bash
cargo run
```

[^java_unsigned]: Starting with Java 8, the `Number` classes have some helper methods, like `compareUnsigned` and `toUnsigned...` that allow the usage and manipulation of unsigned numbers.

[^c_int_type]: The size of `int` is implementation defined, C99 only specifying the minimum guaranteed size of 2 bytes.

