/**
 * 天气、人流量等工具函数
 */

export function getUserLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ city: '烟台', adcode: '370600' });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => resolve({ city: '烟台', adcode: '370600' }),
      () => resolve({ city: '烟台', adcode: '370600' }),
    );
  });
}

export async function fetchWeather(adcode) {
  try {
    const API_KEY = '352f017239de4d4c42d318127d1c75f0';
    const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=${API_KEY}&extensions=all`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === '1' && data.forecasts?.length > 0) {
      return {
        city: data.forecasts[0].city,
        current: data.forecasts[0].casts[0],
        forecast: data.forecasts[0].casts,
      };
    }
    return null;
  } catch (err) {
    console.error('天气获取失败:', err);
    return null;
  }
}

export function estimateCrowdLevel(date) {
  const day = new Date(date).getDay();
  const month = new Date(date).getMonth() + 1;
  if (month >= 5 && month <= 10) {
    return day === 0 || day === 6 ? '高' : '中';
  }
  return day === 0 || day === 6 ? '中' : '低';
}

export function getFallbackPlan(city, weather, crowdLevel) {
  const w = weather?.current?.dayweather || '晴';
  const tip = crowdLevel === '高' ? '建议错峰出行，选择上午9:00入馆' : '游览体验佳';
  return `
    <div style="background:rgba(196,162,101,0.08);border-left:3px solid var(--gold);padding:12px 16px;margin-bottom:16px;font-size:13px;color:var(--gold);">
      &#x26a0; AI 服务尚未开启，以下为您提供一份蓬莱博物馆基础游玩攻略
    </div>
    <strong>&#x1f509; 出行建议</strong><br>
    今日${w}，人流量${crowdLevel}级别，${tip}。<br>
    博物馆免费参观（凭身份证入馆），夏季9:00-18:00，冬季9:00-17:00，周一闭馆。<br><br>

    <strong>&#x1f3d7; 推荐参观路线（约2小时）</strong><br>
    序厅(15min) → 古城遗韵厅(20min) → 千年古港厅(25min) →<br>
    海防重镇厅(20min) → 文物精华厅(30min) → 名人故里厅(15min)<br><br>

    <strong>&#x2694; 戚继光文化专线</strong><br>
    名人故里厅·戚继光展区(20min) → 海防重镇厅·明代兵器(20min) →<br>
    文物精华厅·戚继光手书立轴(15min) → 戚继光故里(步行5分钟)<br>
    感悟「封侯非我意，但愿海波平」的家国情怀。<br><br>

    <strong>&#x1f5fa; 周边联游</strong><br>
    蓬莱阁(5A景区，步行5分钟) → 戚继光故里(国家级文保，步行5分钟) →<br>
    蓬莱水城(步行3分钟) → 田横山公园(步行8分钟)
  `;
}

/**
 * 返回纯文本版攻略（供聊天窗使用，不含 AI 未开启提示）
 */
export function getFallbackPlanText(city, weather, crowdLevel) {
  const w = weather?.current?.dayweather || '晴';
  const tip = crowdLevel === '高' ? '建议错峰出行，选择上午9:00入馆' : '游览体验佳';
  return `【出行建议】
今日${w}，人流量${crowdLevel}级别，${tip}。
博物馆免费参观（凭身份证入馆），夏季9:00-18:00，冬季9:00-17:00，周一闭馆。

【推荐参观路线（约2小时）】
序厅(15min) → 古城遗韵厅(20min) → 千年古港厅(25min) → 海防重镇厅(20min) → 文物精华厅(30min) → 名人故里厅(15min)

【戚继光文化专线】
名人故里厅·戚继光展区(20min) → 海防重镇厅·明代兵器(20min) → 文物精华厅·戚继光手书立轴(15min) → 戚继光故里(步行5分钟)
感悟「封侯非我意，但愿海波平」的家国情怀。

【周边联游】
蓬莱阁(5A景区，步行5分钟) → 戚继光故里(国家级文保，步行5分钟) → 蓬莱水城(步行3分钟) → 田横山公园(步行8分钟)`;
}
