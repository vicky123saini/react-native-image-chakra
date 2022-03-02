# react-native-image-chakra

Image chakra

![image](https://user-images.githubusercontent.com/2674996/156299682-f9ca1c42-14d7-4241-b6dc-924960196b99.png)


## Installation

```sh
npm install react-native-image-chakra
```

## Usage

```js
import ImageChakra from 'react-native-image-chakra';

// ...

<ImageChakra 
      data={{
        centerImage:{uri:`https://yourimageresource.com/content/App/assets/images/spinner/Hand.png`},
        chakraImage:{uri:`https://yourimageresource.com/Content/Chakra/m2tkbjnvx2g.png`},
        fingerImage:{uri:`https://yourimageresource.com/content/App/assets/images/spinner/Spin-wheel-04.png`}
      }}
      onSpinnCompleted={(deg)=> alert(deg)}/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
