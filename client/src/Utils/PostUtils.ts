import moment from "moment"

export const getPostTimeLocalString = (postTime : string) => {
  const postTimeUtc = moment.utc(postTime);
  const nowUtc = moment.utc(moment.now());
  const timeDiff = nowUtc.diff(postTimeUtc, 'days');
  switch (timeDiff) {
    case 0:
    case 1: return '1 день назад';
    case 2:
    case 3:
    case 4: return `${timeDiff} дня назад`;
    case 5:
    case 6:
    case 7: return `${timeDiff} дней назад`;
    default: return postTimeUtc.format('DD/MM/YYYY');
  }
}

export const getPostCommentsLocalString = (comments: number) => {
  const lastDigit = comments % 10;
  switch (lastDigit) {
    case 1: return `${comments} коммент`;
    case 2:
    case 3:
    case 4: return `${comments} коммента`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: return `${comments} комментов`;
  }
}

export const getPostLikesLocalString = (likes: number) => {
  const lastDigit = likes % 10;
  switch (lastDigit) {
    case 1: return `${likes} лайк`;
    case 2:
    case 3:
    case 4: return `${likes} лайка`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: return `${likes} лайков`;
  }
}