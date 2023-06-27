/*https://stackoverflow.com/questions/56738500/react-native-onlayout-with-react-hooks*/
import {useCallback, useState} from "react";
import {LayoutChangeEvent, LayoutRectangle} from "react-native";

//hook that returns layout, and function to pass to View's onLayout prop
export default function useLayout(
  initialVal?: Partial<LayoutRectangle>,
): [LayoutRectangle, (l: LayoutChangeEvent) => void] {
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    ...(initialVal || {}),
  });

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setLayout(e.nativeEvent.layout);
  }, []);
  return [layout, onLayout];
}
