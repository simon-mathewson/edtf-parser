module.exports = {
  // Simple dates
  'May 4, 2005': '2005-05-04',
  '2016-06-02': '2016-06-02',
  '10/11/1992': '1992-11-10',
  'March 2013': '2013-03',
  '2 juil. 1891': '1891-07-02',
  // Open start
  'before 1970': '[..1970]',
  'until 1970': '[..1970]',
  // Open end
  'after 1970': '[1970..]',
  'since 1970': '[1970..]',
  'from 1970': '[1970..]',
  // Approximate
  'c. 1970': '1970~',
  'ca. 1970': '1970~',
  'circa 1970': '1970~',
  'by 1970': '1970~',
  'ca 1970': '1970~',
  'approx 1970': '1970~',
  'about 1970': '1970~',
  'around 1970': '1970~',
  'near 1970': '1970~',
  // Uncertain
  '? 1970': '1970?',
  'possibly 1970': '1970?',
  'maybe 1970': '1970?',
  'maybe ca. 1970': '1970%',
  'c. avril 1920': '1920-04~',
  // Intervals
  '1927, until 1930': '1927/1930',
  '1927 until 1930': '1927/1930',
  'march 3- june 4, 1971': '1971-03-03/1971-06-04',
  'march 3, 1970 - june 4, 1971': '1970-03-03/1971-06-04',
  'circa march 3, 1970 until june 4, 1971': '1970-03-03~/1971-06-04',
  'October 24, 1977': '1977-10-24',
  // Custom Inputs
  'until at least 1970': '[..1970..]',
  'as of 1970': '[..1970..]',
  // Ranges
  'June 19 2000 - July 1st 2001': '2000-06-19/2001-07-01',
  'June 19 2000 - July 2nd 2001': '2000-06-19/2001-07-02',
  'June 19 2000 - July 3rd 2001': '2000-06-19/2001-07-03',
  'June 19 2000 - July 4th 2001': '2000-06-19/2001-07-04',
  // Partial ranges
  '26-27/06/1978': '1978-06-26/1978-06-27',
  '9-15/09/1959': '1959-09-09/1959-09-15',
  '30/11-01/12/1976': '1976-11-30/1976-12-01',
  'around 30/11-01/12/1976': '1976-11-30~/1976-12-01',
  '30/11 - maybe 01/12/1976': '1976-11-30/1976-12-01?',
  'c. 1930-35': '1930~/1935',
  '1974 - 75': '1974/1975',
  '1 – 9 March 1921': '1921-03-01/1921-03-09', // m-dash
  'septembre-octobre 1958': '1958-09/1958-10',
  // '1876 or 1877': [1876,1877],
  // 'Spring of 1969': '1969-21',
  // 'Summer of 1969': '1969-22',
  // 'Autumn of 1969': '1969-23',
  // 'Winter of 1969': '1969-24',
  // 'Spring 1969': '1969-21',
  // 'Summer 1969': '1969-22',
  // 'Autumn 1969': '1969-23',
  // 'Fall 1969': '1969-23',
  // 'Winter 1969': '1969-24',
  // '1970s': '197',
  // '2010s': '201',
};
