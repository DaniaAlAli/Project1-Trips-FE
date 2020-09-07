import { decorate, observable } from "mobx";
import instance from "./instance";

class QAStore {
  question = [];

  loading = true;

  fetchQuestion = async () => {
    try {
      const res = await instance.get("/question");
      this.question = res.data;
      this.question = this.question.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );
      this.loading = false;
    } catch (error) {
      console.error("error:", error);
    }
  };

  createQuestion = async (newQuestion) => {
    try {
      const formData = new FormData();
      for (const key in newQuestion) formData.append(key, newQuestion[key]);
      const res = await instance.post(
        `/trips/${newQuestion.tripId}`,
        newQuestion
      );
      this.question.push(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  deleteQuestion = async (questionId) => {
    try {
      await instance.delete(`/question/${questionId}`);
      this.question = this.question.filter(
        (question) => question.id !== +questionId
      );
    } catch (error) {
      console.error(" error", error);
    }
  };

  updateAnswer = async (updatedAnswer) => {
    try {
      const formData = new FormData();
      for (const key in updatedAnswer) formData.append(key, updatedAnswer[key]);
      await instance.put(`/question/${updatedAnswer.id}`, updatedAnswer);
      const question = this.question.find(
        (question) => question.id === updatedAnswer.id
      );
      for (const key in updatedAnswer) question[key] = updatedAnswer[key];
    } catch (error) {
      console.error("error", error);
    }
  };
}
decorate(QAStore, {
  question: observable,
  loading: observable,
});

const qaStore = new QAStore();
qaStore.fetchAsk();

export default qaStore;
