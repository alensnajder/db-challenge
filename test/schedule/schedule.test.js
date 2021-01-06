const Schedule = require("../../src/schedule/schedule");
const schedule = new Schedule();

beforeEach(() => {
  schedule.removeAll();
});

test("should add cron job", () => {
  schedule.addJob("testJob", "* * * * *", null);
  const addedJob = schedule.getJob("testJob");

  expect(addedJob).toBeTruthy();
});

test("should get cron job by name", () => {
  schedule.addJob("testJob", "* * * * *", null);
  const cronJob = schedule.getJob("testJob");

  expect(cronJob).toBeTruthy();
});

test("should remove cron job by name", () => {
  schedule.addJob("testJob", "* * * * *", null);
  schedule.removeJob("testJob");
  const cronJob = schedule.getJob("testJob");

  expect(cronJob).toBeFalsy();
});

test("should start cron job by name", () => {
  schedule.addJob("testJob", "* * * * *", null);
  schedule.startJob("testJob");
  const cronJob = schedule.getJob("testJob");

  expect(cronJob.status).toBe("scheduled");
});

test("should stop cron job by name", () => {
  schedule.addJob("testJob", "* * * * *", null);
  schedule.startJob("testJob");
  const cronJob = schedule.getJob("testJob");
  schedule.stopJob("testJob");

  expect(cronJob.status).toBe("stoped");
});

test("should remove all cron jobs", () => {
  schedule.addJob("testJob1", "* * * * *", null);
  schedule.addJob("testJob2", "* * * * *", null);
  schedule.addJob("testJob3", "* * * * *", null);

  schedule.removeAll();

  expect(schedule.getJob("testJob1")).toBeFalsy();
  expect(schedule.getJob("testJob2")).toBeFalsy();
  expect(schedule.getJob("testJob3")).toBeFalsy();
});