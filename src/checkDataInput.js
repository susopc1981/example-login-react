export function checkTlf(data) {
  console.log(data.length);
  let dataTrue = true;
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) dataTrue = false;
    }
  } else dataTrue = false;

  return dataTrue;
}

export function checkDataInput(a, b) {}
