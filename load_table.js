function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1" style="width: 20vw;"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateNeuralCodecTable(tableId) {
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'wavs/neural_codecs/';
  const wavs = [
    'TooBright',
    'CurAnLongAgSeol',
    'Directions',
    'Falcon69',
    'TooMuch',
  ];
  const end_idx = wavs.length;
  for (let i = 0; i < end_idx; i++) {
    let row = table.insertRow(i % end_idx + 1);
    row.style.height = '120px';

    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + '/gt/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(1);
    cell.innerHTML = createAudioHTML(prefix + '/ss-joint/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(2);
    cell.innerHTML = createAudioHTML(prefix + '/ss-dual-lr/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(3);
    cell.innerHTML = createAudioHTML(prefix + '/ss-dual-ms/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(4);
    cell.innerHTML = createAudioHTML(prefix + '/ec-dual-lr/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(5);
    cell.innerHTML = createAudioHTML(prefix + '/ec-dual-ms/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";
    
  }
}


function generateStereoLMTable(tableId) {
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'wavs/stereo_lms/';
  const wavs = [
    'TooBright',
    'CurAnLongAgSeol',
    'Directions',
    'Falcon69',
    'TooMuch',
  ];
  const end_idx = wavs.length;
  for (let i = 0; i < end_idx; i++) {
    let row = table.insertRow(i % end_idx + 1);
    row.style.height = '120px';

    let cell = row.insertCell(0);
    cell.innerHTML = createAudioHTML(prefix + '/gt/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(1);
    cell.innerHTML = createAudioHTML(prefix + '/musicgen/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(2);
    cell.innerHTML = createAudioHTML(prefix + '/ec-lr-seq/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(3);
    cell.innerHTML = createAudioHTML(prefix + '/ec-lr-para/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(4);
    cell.innerHTML = createAudioHTML(prefix + '/ec-ms-seq/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(5);
    cell.innerHTML = createAudioHTML(prefix + '/ec-ms-para/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(6);
    cell.innerHTML = createAudioHTML(prefix + '/ss-lr-seq/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(7);
    cell.innerHTML = createAudioHTML(prefix + '/ss-lr-para/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(8);
    cell.innerHTML = createAudioHTML(prefix + '/ss-ms-seq/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";

    cell = row.insertCell(9);
    cell.innerHTML = createAudioHTML(prefix + '/ss-ms-para/' + wavs[i] + '.wav');
    cell.style.textAlign = "center";
    
  }
}


generateNeuralCodecTable('neural-codecs');
generateStereoLMTable('stereo-lms');
