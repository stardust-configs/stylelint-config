# @stardust-configs/stylelint-config

> Shareable Stylelint config

## Install

```sh
npm install stylelint @stardust-configs/stylelint-config -D
```

or

```sh
yarn add stylelint @stardust-configs/stylelint-config -D
```

## Usage

Edit `.stylelintrc`.

```json
{
  "extends": ["@stardust-configs/stylelint-config"]
}
```

Edit `package.json`.

```json
{
  "scripts": {
    "fix:css": "stylelint ./**/*.css --fix",
    "lint:css": "stylelint ./**/*.css"
  }
}
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
