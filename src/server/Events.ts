const PlayerPed = GetPlayerPed(-1);

console.log('Events')

onNet('marker:bar', (id: number) => {
    console.log('bar', id);
})