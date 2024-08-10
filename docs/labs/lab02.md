---
sidebar_position: 2
description: spi, i2c  
---

# 0x02
# embassy-rs: SPI & I2C

Connect the **AT24C256** EEPROM module to the Pico, through **I2C**:

|EEPROM| Pico |
|------|------|
| SCL  | GP20 |
| SDA  | GP21 |

Similar to the [previous lab](./lab01), connect the RGB LED to the Pico.

1. Write 30 random bytes to the **EEPROM** at addresses ranging from _0x00 to 0x1D_. 
2. Read the previous written values in groups of three, each group representing a color. Display
the colors on the **RGB LED**, for two seconds each.
3. Initialize the **SPI** controller that connects to the LCD on the Explorer Base.
4. Using the [**embedded_graphics**](https://docs.rs/embedded-graphics/latest/embedded_graphics/) crate, write a centered message of _"Hello, IPW!"_ to the LCD.

### Memory game

Write a memory game using the _EEPROM_ module, two _LEDs_ (one green and one red),
and the _LCD_ display:

The program must display 4 random letters, that can be either `A`, `B`, `X` or `Y` (corresponding to the buttons on the
Pico Explorer Base); each letter will be displayed for _500ms_.
After they are displayed, the user must recreate the sequence in the exact order (the sequence can have repeating letters),
by pressing the buttons on the Explorer Base.

If the sequence is inserted correctly, the **green LED** should be turned on, else, the **red LED** should turn on to indicate
a failure and should reset the score to `0` _(the score represents the number of consecutive rounds played without failure)_.

The game should keep track of the highest score by storing it at address `0x00` in the **EEPROM** (we assume
that its representation doesn't exceed a byte). If the score of a player
is higher than the stored value, the highest score will be updated in the memory.

:::tip
Before the first game played, the EEPROM **must** be initialized with the value `0` at address `0x00`. 
:::

