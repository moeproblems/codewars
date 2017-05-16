// https://www.codewars.com/kata/55538e3de348a57f7e000076
function args(cmd){
  return cmd.trim().replace(/(\s?[\|&;>].*)/, '').split(' ');
}
