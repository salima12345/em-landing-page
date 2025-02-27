 export const formatDate = (date: Date) => {
    const months = [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 
      'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };
