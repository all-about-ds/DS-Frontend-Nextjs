import { CurrentSectionsAtomFamily } from "@/app/_atoms";
import { useRecoilState } from "recoil";
import FirstSection from "./sections/first";
import SecondSection from "./sections/second";
import ThirdSection from "./sections/third";

interface AuthSectionContainerProps {
  title: string;
  atomKey: string;
}

export default function AuthSectionContainer(props: AuthSectionContainerProps) {
  const [currentSection, setCurrentSection] = useRecoilState(
    CurrentSectionsAtomFamily(props.atomKey)
  );

  const sectionRendering = () => {
    const view = [];

    switch (currentSection) {
      case 1:
        view.push(
          <FirstSection
            key={1}
            title={props.title}
            setSection={setCurrentSection}
            atomKey={props.atomKey}
          />
        );
        break;
      case 2:
        view.push(
          <SecondSection
            key={2}
            title={props.title}
            setSection={setCurrentSection}
            atomKey={props.atomKey}
          />
        );
        break;
      case 3:
        view.push(
          <ThirdSection
            key={3}
            title={props.title}
            setSection={setCurrentSection}
            atomKey={props.atomKey}
          />
        );
        break;
    }

    return view;
  };
  return (
    <section>
      <>{sectionRendering()}</>
    </section>
  );
}
