import { makeAutoObservable } from "mobx";
import Question from "../models/question";
import { createContext, PropsWithChildren, useContext } from "react";
import Section from "../models/section";

class Store {
  sections: Section[];
  focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );

    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  addSection() {
    const newSection = new Section();
    this.sections.push(newSection);
    this.focusedSectionId = newSection.id;
  }

  addQuestion() {
    const section = this.sections.find(
      (section) => section.id === this.focusedSectionId
    );

    if (section) {
      section.addQuestion();
    }
  }
}

const surveyStore = new Store();
const SurveyStoreContext = createContext(surveyStore);
export const useSurveyStore = () => useContext(SurveyStoreContext);
export const SurveyStoreProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <SurveyStoreContext.Provider value={surveyStore}>
      {children}
    </SurveyStoreContext.Provider>
  );
};
