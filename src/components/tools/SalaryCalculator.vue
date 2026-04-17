<template>
  <div class="max-w-2xl mx-auto">
    <!-- Input Section -->
    <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Параметры</h2>

      <!-- Salary Input -->
      <div class="mb-4">
        <label for="salary" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Зарплата brutto (PLN/мес)
        </label>
        <input
          id="salary"
          v-model.number="salary"
          type="number"
          min="0"
          step="100"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-lg"
          placeholder="7000"
        />
      </div>

      <!-- Contract Type -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Тип договора
        </label>
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="ct in contractTypes"
            :key="ct.value"
            @click="contractType = ct.value"
            :class="[
              'px-3 py-2 rounded-lg text-sm font-medium border transition-colors',
              contractType === ct.value
                ? 'bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-600 text-red-700 dark:text-red-300'
                : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            ]"
          >
            {{ ct.label }}
          </button>
        </div>
      </div>

      <!-- Age under 26 -->
      <div class="mb-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="isUnder26"
            type="checkbox"
            class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-red-600 focus:ring-red-500"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">
            Мне до 26 лет (освобождение от PIT до 85 528 PLN/год)
          </span>
        </label>
      </div>

      <!-- PPK -->
      <div class="mb-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="hasPPK"
            type="checkbox"
            class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-red-600 focus:ring-red-500"
          />
          <span class="text-sm text-gray-700 dark:text-gray-300">
            PPK (работник 2%, работодатель 1.5%)
          </span>
        </label>
      </div>

      <!-- Koszty -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Koszty uzyskania przychodu
        </label>
        <select
          v-model="koszt"
          class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
        >
          <option value="basic">Обычные — 250 PLN/мес</option>
          <option value="elevated">Повышенные — 300 PLN/мес</option>
        </select>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="salary > 0" class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Результат</h2>

      <!-- Netto highlight -->
      <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 mb-6 border border-green-200 dark:border-green-800">
        <p class="text-sm text-green-600 dark:text-green-400 mb-1">Зарплата netto (на руки)</p>
        <p class="text-3xl font-bold text-green-700 dark:text-green-300">
          {{ formatPLN(result.netto) }} PLN
        </p>
        <p class="text-xs text-green-500 dark:text-green-500 mt-1">
          {{ formatPLN(result.netto * 12) }} PLN в год
        </p>
      </div>

      <!-- Breakdown -->
      <div class="space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Зарплата brutto</span>
          <span class="font-medium text-gray-900 dark:text-white">{{ formatPLN(salary) }} PLN</span>
        </div>

        <hr class="border-gray-100 dark:border-gray-700" />

        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Взносы работника (ZUS)</p>

        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Emerytalne (пенсионный) — 9.76%</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.emerytalne) }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Rentowe (по инвалидности) — 1.5%</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.rentowe) }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Chorobowe (по болезни) — 2.45%</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.chorobowe) }}</span>
        </div>

        <hr class="border-gray-100 dark:border-gray-700" />

        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Zdrowotne (здравоохр.) — 9%</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.zdrowotne) }}</span>
        </div>

        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Налог PIT ({{ isUnder26 ? 'освобождён' : '12%' }})</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.pit) }}</span>
        </div>

        <div v-if="hasPPK" class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">PPK (работник) — 2%</span>
          <span class="text-red-600 dark:text-red-400">-{{ formatPLN(result.ppkEmployee) }}</span>
        </div>

        <hr class="border-gray-100 dark:border-gray-700" />

        <div class="flex justify-between text-sm font-semibold">
          <span class="text-gray-900 dark:text-white">Итого netto</span>
          <span class="text-green-600 dark:text-green-400">{{ formatPLN(result.netto) }} PLN</span>
        </div>

        <hr class="border-gray-100 dark:border-gray-700" />

        <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Стоимость работодателя</p>

        <div class="flex justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">Взносы работодателя (ZUS)</span>
          <span class="text-gray-900 dark:text-white">+{{ formatPLN(result.employerZUS) }}</span>
        </div>
        <div class="flex justify-between text-sm font-semibold">
          <span class="text-gray-900 dark:text-white">Полная стоимость работодателя</span>
          <span class="text-gray-900 dark:text-white">{{ formatPLN(result.employerTotal) }} PLN</span>
        </div>
      </div>

      <p class="text-xs text-gray-400 dark:text-gray-500 mt-6">
        * Расчёт приблизительный. Для точного расчёта обратитесь к бухгалтеру.
        Ставки актуальны на 2026 год.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const salary = ref(7000);
const contractType = ref('umowa-o-prace');
const isUnder26 = ref(false);
const hasPPK = ref(false);
const koszt = ref('basic');

const contractTypes = [
  { value: 'umowa-o-prace', label: 'Umowa o pracę' },
  { value: 'umowa-zlecenie', label: 'Umowa zlecenie' },
  { value: 'umowa-o-dzielo', label: 'Umowa o dzieło' },
  { value: 'b2b', label: 'B2B (JDG)' },
];

const result = computed(() => {
  const brutto = salary.value || 0;

  if (contractType.value === 'umowa-o-dzielo') {
    // Umowa o dzieło — no ZUS, only PIT
    const kosztyRate = 0.20; // 20% koszty
    const taxBase = brutto * (1 - kosztyRate);
    const pit = isUnder26.value ? 0 : Math.max(0, Math.round(taxBase * 0.12));
    return {
      emerytalne: 0,
      rentowe: 0,
      chorobowe: 0,
      zdrowotne: 0,
      pit,
      ppkEmployee: 0,
      netto: brutto - pit,
      employerZUS: 0,
      employerTotal: brutto,
    };
  }

  if (contractType.value === 'b2b') {
    // Simplified B2B (liniowy 19%)
    const zus = 1600; // approximate monthly ZUS for B2B
    const zdrowotne = Math.round(brutto * 0.09);
    const pit = isUnder26.value ? 0 : Math.round((brutto - zus) * 0.19);
    return {
      emerytalne: 0,
      rentowe: 0,
      chorobowe: 0,
      zdrowotne,
      pit: Math.max(0, pit),
      ppkEmployee: 0,
      netto: brutto - zus - zdrowotne - Math.max(0, pit),
      employerZUS: 0,
      employerTotal: brutto,
    };
  }

  // Umowa o pracę / zlecenie
  const emerytalne = Math.round(brutto * 0.0976);
  const rentowe = Math.round(brutto * 0.015);
  const chorobowe = contractType.value === 'umowa-o-prace' ? Math.round(brutto * 0.0245) : 0;

  const zusEmployee = emerytalne + rentowe + chorobowe;
  const afterZUS = brutto - zusEmployee;

  // Zdrowotne (health insurance) — 9% of (brutto - ZUS)
  const zdrowotne = Math.round(afterZUS * 0.09);

  // Tax base
  const kosztyAmount = koszt.value === 'basic' ? 250 : 300;
  const taxBase = Math.max(0, afterZUS - kosztyAmount);

  // PIT
  let pit = 0;
  if (!isUnder26.value) {
    pit = Math.round(taxBase * 0.12 - 300); // 300 PLN monthly tax reduction (kwota zmniejszająca)
    pit = Math.max(0, pit);
  }

  // PPK
  const ppkEmployee = hasPPK.value ? Math.round(brutto * 0.02) : 0;
  const ppkEmployer = hasPPK.value ? Math.round(brutto * 0.015) : 0;

  const netto = brutto - zusEmployee - zdrowotne - pit - ppkEmployee;

  // Employer costs
  const employerEmerytalne = Math.round(brutto * 0.0976);
  const employerRentowe = Math.round(brutto * 0.065);
  const employerWypadkowe = Math.round(brutto * 0.0167);
  const employerFP = Math.round(brutto * 0.0245); // Fundusz Pracy
  const employerFGSP = Math.round(brutto * 0.001); // FGŚP
  const employerZUS = employerEmerytalne + employerRentowe + employerWypadkowe + employerFP + employerFGSP + ppkEmployer;
  const employerTotal = brutto + employerZUS;

  return {
    emerytalne,
    rentowe,
    chorobowe,
    zdrowotne,
    pit,
    ppkEmployee,
    netto: Math.max(0, netto),
    employerZUS,
    employerTotal,
  };
});

function formatPLN(value: number): string {
  return value.toLocaleString('pl-PL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
</script>
