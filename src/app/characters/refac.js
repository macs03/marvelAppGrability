import Service from './servicio';
import Driver from './driver';
import Push from './push';

(function () {
  'use restrict';

  function postConfirm(params) {
    const id = params.service_id;
    let servicio = Service.find(id);
    const service = servicio;
    let condition = 0;

    if (servicio) {
      if (servicio.status_id === '6') {
        return {error: '2'};
      }
      if (servicio.driver_id === null && servicio.status_id === '1') {
        servicio = Service.update(id, {
          driverId: params.driver_id,
          statusId: '2'
          // Up carro
          // , pwd: md5(params.pwd)
        });
        Driver.update(params.driver_id, {
          available: '0'
        });
        const driverTmp = Driver.find(params.driver_id);
        Service.update(id, {
          carId: driverTmp.car_id
          // Up carro
          // , pwd: md5(params.pwd)
        });
        // update user!!
        const pushMessage = "Tu servicio ha sido confirmado!";
        servicio = Service.find(id);
        const push = Push.make();
        if (servicio.user.uuid === '') {
          return {error: '0'};
        }
        if (servicio.user.type === '1') {
          // iPhone
          push.ios(servicio.user.uuid, pushMessage, 1, 'honk.wav', 'Open', {serviceId: service.id});
        } else {
          // android
          push.android2(servicio.user.uuid, pushMessage, 1, 'default', 'Open', {serviceId: service.id});
        }
        condition = 1;
      } else {
        condition = 2;
      }
    } else {
      return {error: '3'};
    }

    if (condition === 1) {
      return {error: '0'};
    }
    if (condition === 2) {
      return {error: '1'};
    }
  }

  postConfirm(Service.data);
})();
