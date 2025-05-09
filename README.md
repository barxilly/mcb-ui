# mcb-ui

A port of Minecraft Bedrock Edition's UI to React.

> [!NOTE]
> This project is based on the idea from [minecraft-react-ui](https://github.com/josempineiro/minecraft-react-ui) by josempineiro, and aims to be a completely new version of it with different components (not to mention more up-to-date).

---

## Installation

```bash
yarn add mcb-ui@latest
```

---

## Usage

```jsx
import React from "react";
import { Button } from "mcb-ui";

const App = () => {
  return <Button>Click me!</Button>;
};

export default App;
```

---

## Components

### Button

```jsx
<Button
  color="primary" // "primary" / "secondary" / "#aabbcc"
  textcolor="primary" // "primary" / "secondary" / "#aabbcc"
  font="Minecraft Ten" // "Minecraft Ten" / "Minecraft Seven" / other font
  disabled // true / false, default: false
  active // true / false, default: false
  onClick={() => {}} // function
  style={{}} // object
>
  Primary Button
</Button>
```

![Button](/gh/button.png)

### Input

```jsx
<Input
  placeholder="Primary Input"
  color="primary" // "primary" / "secondary" / "#aabbcc"
  textcolor="primary" // "primary" / "secondary" / "#aabbcc"
  font="Minecraft Ten" // "Minecraft Ten" / "Minecraft Seven" / other font
  disabled // true / false, default: false
  style={{}} // object
/>
```

![Input](/gh/input.png)

### Card

```jsx
<Card
  style={{}} // object
>
  Card content
</Card>
```

![Card](/gh/card.png)

### Title

```jsx
<Title
  level={1} // 1 / 2 / 3 / 4 / 5 / 6
  font="Minecraft Ten" // "Minecraft Ten" / "Minecraft Seven" / other font
  left // true / false, default: false
  center // true / false, default: false
  right // true / false, default: false
  style={{}} // object
>
  Title
</Title>
```

![Title](/gh/title.png)
