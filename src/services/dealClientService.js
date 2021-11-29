const config = require("../config");
const axios = require("axios");

const pipeDriveUrl = config.integrations.pipedrive.url;
const keyPipeDrive = config.integrations.pipedrive.key;

class dealClientService {
  async getWonDeals() {
    try {
      const { data } = await axios
           .get(`${pipeDriveUrl}/deals?status=won&start=0&api_token=${keyPipeDrive}`);

           return data.data;
    } catch (err) {
        return
    }
  }
}

module.exports=new dealClientService;
