"use client";

import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { chapterReducer } from "./slices/chapters";
import { modalReducer } from "./slices/modal";
import { allTestSeriesQuizReducer } from "./slices/allTestQuiz";
import { sectionReducer } from "./slices/sections";
import { subjectReducer } from "./slices/subjects";
import { languageReducer } from "./slices/languages";
import { allPackageReducer } from "./slices/allPackage";
import { studentReducer } from "./slices/students";
import { bannerReducer } from "./slices/banners";
import { testseriesReducers } from "./slices/testseries";
import { examsReducer } from "./slices/exams";
import { allCategoryReducer } from "./slices/category";
import { stageReducer } from "./slices/stages";
import { testReducer } from "./slices/test";
import { testseriesSubjectReducer } from "./slices/testseriesSubject";
import { testTypeReducer } from "./slices/testTypes";
import { courseQuizReducer } from "./slices/courseQuiz";
import { minipacageReducer } from "./slices/minipackage";
import { lessonReducer } from "./slices/lessions";
import { videosReducer } from "./slices/videos";
import { pdfReducer } from "./slices/pdfs";
import { allPackageCategoryReducer } from "./slices/packageCategory";
import { examysAiReducer } from "./slices/examysAI";
import { trendReducer } from "./slices/trends";
import { prevYearsReducer } from "./slices/prevYears";
import { passProReduceer } from "./slices/passpro";

const store = configureStore({
  reducer: {
    students: studentReducer,
    chapters: chapterReducer,
    sections: sectionReducer,
    subject: subjectReducer,
    testseriesSubject: testseriesSubjectReducer,
    modal: modalReducer,
    languages: languageReducer,
    allTestSeriesQuiz: allTestSeriesQuizReducer,
    package: allPackageReducer,
    banners: bannerReducer,
    testseries: testseriesReducers,
    exams: examsReducer,
    category: allCategoryReducer,
    stage: stageReducer,
    test: testReducer,
    testTypes: testTypeReducer,
    // package related
    courseQuiz: courseQuizReducer,
    minipackage: minipacageReducer,
    lessons: lessonReducer,
    pdfs: pdfReducer,
    videos: videosReducer,
    packageCategory: allPackageCategoryReducer,
    // trends
    aiData: examysAiReducer,
    trend: trendReducer,
    // prev yr
    prevYear: prevYearsReducer,
    // pass pro
    passPro: passProReduceer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
